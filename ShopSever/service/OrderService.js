const JsBarcode = require('jsbarcode');
const { createCanvas } = require('canvas');
const OrderModel = require('../model/OrderModel');
const moment = require('moment');
const paypal = require('paypal-rest-sdk');
const { upload, uploadToCloudinary } = require('../middleware/CloudinaryUpload');

paypal.configure({
    mode: 'sandbox', // Hoặc 'live' trong môi trường thực tế
    client_id: 'AQBGJCGJpTraHvp99lZDXdkZ9oJQabezxx1uG0kb36IxJG4oSMQPdSvK4MHA0GcbtPIV9FwZLYQ4s9CG',
    client_secret: 'EKcUdlbkLVEwK63HST9MKrW2gzwpeU79tU14Y0b9l37_-0jfluYKGn0ya4lJk6gN6EGEtVPM3tZgWTte',
});

// Tạo thanh toán PayPal và trả về URL thanh toán
const createPaypalPayment = async (userId) => {
    try {
        // Lấy thông tin đơn hàng từ cơ sở dữ liệu
        const order = await OrderModel.findOne({ userId })
            .populate('cart')
            // .populate('addressId')
            .populate('shippingId')
            .populate('promoCode');
        if (!order) {
            console.log('Không tìm thấy đơn hàng');
            return;
        }
        // Trích xuất thông tin đơn hàng
        const { cart, addressId, shippingId, promoCode } = order;
        // Trích xuất thông tin sản phẩm từ mảng cart.productId
        const transactionItems = cart.productId.map((item) => ({
            name: item.name,
            sku: item._id,
            price: item.price,
            currency: 'USD',
            quantity: item.quantity,
        }));
        // Tính tổng tiền cuả transactionItem (tổng tiền sản phẩm) và phí ship và mã giảm giá nếu có
        let itemTotal = transactionItems.reduce((total, item) => total + item.price * item.quantity, 0);
        let transactionTotal = itemTotal + shippingId.price;
        let transactionDetails = {
            subtotal: itemTotal.toFixed(2),
            tax: '0.00',
            shipping: shippingId.price.toFixed(2),

        };
        // Kiểm tra nếu có mã giảm giá
        if (promoCode) {
            const discount = promoCode.discount;
            transactionTotal -= discount;
            transactionDetails.discount = discount.toFixed(2);
        }
        // Tạo một payment request với thông tin sản phẩm
        const createPaymentJson = {
            intent: 'sale',
            payer: {
                payment_method: 'paypal',
            },
            redirect_urls: {
                return_url: 'http://localhost:3000/order/success',
                cancel_url: 'http://localhost:3000/order/cancel',
            },
            transactions: [
                {
                    item_list: {
                        items: transactionItems,
                    },
                    amount: {
                        currency: 'USD',
                        total: transactionTotal.toFixed(2),
                        details: transactionDetails,
                    },
                },
            ],
        };
        // Gửi yêu cầu tạo thanh toán PayPal
        return new Promise((resolve, reject) => {
            paypal.payment.create(createPaymentJson, (error, payment) => {
                if (error) {
                    reject(error);
                    console.log(error.response.name);
                    console.log(error.response.details);
                    console.log(error.response.details[0].issue);
                } else {
                    // Lưu thông tin thanh toán vào đơn hàng
                    order.cart = cart;
                    order.paymentMethod = 'paypal';
                    order.save();
                    // Tìm kiếm URL thanh toán trong response
                    const { links } = payment;
                    let paymentUrl = null;
                    links.forEach((link) => {
                        if (link.rel === 'approval_url') {
                            paymentUrl = link.href;
                        }
                    });
                    resolve(paymentUrl);
                    console.log('URL thanh toán:', paymentUrl);
                }
            });
        });
    } catch (error) {
        throw error;
    }
};


// Xác nhận thanh toán PayPal lấy thông tin thanh toán
const executePaypalPayment = async (paymentId, payerId) => {
    try {
        const encodedPaymentId = encodeURIComponent(paymentId);
        const encodedPayerId = encodeURIComponent(payerId);
        // Gửi yêu cầu xác nhận thanh toán
        paypal.payment.execute(encodedPaymentId, { payer_id: encodedPayerId }, async (error) => {
            if (error) {
                console.log(error);
                throw error;
            } else {
                console.log('Thanh toán thành công');
                //lưu paymentMethod và paymentStatus vào đơn hàng
            }
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

// Tạo mã barcode ngẫu nhiên và lưu vào đơn hàng
const createBarcode = async (userId) => {
    try {
        const order = await OrderModel.findOne({ userId });
        // Tạo mã đơn hàng (transaction ID)
        const transactionId = generateTransactionId();
        // Lưu mã đơn hàng vào đơn hàng
        order.TransactionId = transactionId;
        console.log('Mã đơn hàng:', transactionId);
        await order.save();
        // Tạo mã barcode ngẫu nhiên chứa 14 ký tự số 
        const barcode = Math.floor(Math.random() * 10000000000000).toString();
        // Tạo mã vạch
        const canvas = createCanvas();
        JsBarcode(canvas, barcode, { format: 'MSI11', displayValue: true });
        const buffer = canvas.toBuffer('image/png');
        const file = {
            path: `data:image/png;base64,${buffer.toString('base64')}`,
        };
        // Tải lên hình ảnh mã vạch lên Cloudinary
        const imageUrl = await uploadToCloudinary(file);
        // Lưu đường dẫn hình ảnh vào đơn hàng
        order.barcode = imageUrl;
        await order.save();
        // Trả về đường dẫn hình ảnh mã vạch cho client
        return imageUrl;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi khi tạo mã vạch');
    }
};


// Hàm tạo mã đơn hàng (transaction ID)
const generateTransactionId = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetters = letters.charAt(Math.floor(Math.random() * letters.length)) +
        letters.charAt(Math.floor(Math.random() * letters.length));
    const randomNumbers = Math.random().toString().substr(2, 10);
    return randomLetters + randomNumbers;
};

//trả mã vạch
const getBarcode = async (userId) => {
    try {
        const order = await OrderModel.findOne({ userId });
        if (!order) {
            throw new Error('Không tìm thấy đơn hàng');
        }
        if (!order.barcode) {
            throw new Error('Đơn hàng chưa có mã vạch');
        }
        return order;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi khi lấy mã vạch');
    }
};

// Gọi thanh toán PayPal
const payWithPaypal = async (userId) => {
    try {
        const order = await OrderModel.findOne({ userId })
            .populate('cart')
            .populate('addressId')
            .populate('shippingId')
            .populate('promoCode');
        if (!order) {
            console.log('Không tìm thấy đơn hàng');
            return;
        }
        const { cart, total, addressId, shippingId, promoCode } = order;
        // Trích xuất thông tin sản phẩm từ mảng cart.productId
        const products = cart.productId.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            currency: 'USD',
        }));
        const paymentUrl = await createPaypalPayment(userId, products, total, addressId, shippingId, promoCode);
        console.log('URL thanh toán:', paymentUrl);
        return paymentUrl;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi khi gọi thanh toán PayPal');
    }
};

// Tạo một đơn hàng mới
const createOrder = async (userId, cart, total, addressId, shippingId, promoCode) => {
    try {
        // Trích xuất thông tin sản phẩm từ mảng productId
        const orderHour = moment().format('HH:mm A'); // Lấy giờ hiện tại và định dạng theo 'HH:mm A'
        const timeBuy = moment().format('MMM D, YYYY'); // Lấy ngày hiện tại và định dạng theo 'DD/MM/YYYY'
        const order = await OrderModel.create({ userId, cart, total, addressId, shippingId, promoCode, orderHour, timeBuy });
        return order;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi khi tạo đơn hàng');
    }
};

// Lấy thông tin tất cả đơn hàng theo ID
const getOrderById = async (userId) => {
    try {
        const order = await OrderModel.findOne({ userId })
            .populate('cart')
            .populate('addressId')
            .populate('shippingId')
            .populate('promoCode');
        if (!order) {
            throw new Error('Không tìm thấy đơn hàng');
        }
        console.log('Thông tin đơn hàng:', order);
        return order;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi khi lấy thông tin đơn hàng');
    }
};

// Cập nhật thông tin đơn hàng trạng thái đơn hàng
const updateOrder = async (userId, status, paymentStatus) => {
    try {
        const order = await OrderModel.findOne({ userId });
        if (!order) {
            throw new Error('Không tìm thấy đơn hàng');
        }
        order.status = status;
        order.paymentStatus = paymentStatus;
        await order.save();
        return order;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi khi cập nhật đơn hàng');
    }
};

// Xóa đơn hàng
const deleteOrder = async (userId) => {
    try {
        await OrderModel.deleteMany({ userId });
        console.log('Xóa đơn hàng thành công');
        return true;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi khi xóa đơn hàng');
    }
};
// //lịch sử thanh toán
const getOrderHistory = async (userId) => {
    try {
        const orders = await OrderModel.find({ userId })
            .populate('cart')
            .populate('addressId')
            .populate('shippingId')
            .populate('promoCode');
        if (!orders) {
            throw new Error('Không tìm thấy đơn hàng');
        }
        console.log('Lịch sử thanh toán:', orders);
        return orders;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi khi lấy thông tin đơn hàng');
    }
};


module.exports =
{
    createOrder, getOrderById,
    updateOrder, deleteOrder,
    createPaypalPayment, executePaypalPayment,
    payWithPaypal,
    getOrderHistory, createBarcode, getBarcode
};
