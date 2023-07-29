const orderService = require('../service/OrderService');

// Tạo một đơn hàng mới
const createOrder = async (req, res) => {
    try {
        const { userId } = req.params;
        const { cart, total, addressId } = req.body
        // Gọi service để tạo đơn hàng
        const order = await orderService.createOrder(userId, cart, total, addressId);
        res.status(200).json(order);
        console.log('Đơn hàng mới:', order);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lỗi khi tạo đơn hàng' });
    }
};


// Lấy thông tin đơn hàng theo ID
const getOrderById = async (req, res) => {
    try {
        const { userId } = req.params;
        // Gọi service để lấy thông tin đơn hàng
        const order = await orderService.getOrderById(userId);
        res.status(200).json(order);
        console.log('Thông tin đơn hàng:', order);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lỗi khi lấy thông tin đơn hàng' });
    }
};

// // Cập nhật thông tin đơn hàng
// const updateOrder = async (req, res) => {
//     try {
//         const { userId } = req.params;
//         const { status, paymentStatus } = req.body;
//         // Gọi service để cập nhật thông tin đơn hàng
//         const updatedOrder = await orderService.updateOrder(userId, status, paymentStatus);
//         res.status(200).json(updatedOrder);
//         console.log('Đơn hàng đã được cập nhật:', updatedOrder);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Lỗi khi cập nhật đơn hàng' });
//     }
// };

// // Xóa đơn hàng
// const deleteOrder = async (req, res) => {
//     try {
//         const { userId } = req.params;
//         // Gọi service để xóa đơn hàng
//         await orderService.deleteOrder(userId);
//         res.status(200).json({ message: 'Xóa đơn hàng thành công' });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Lỗi khi xóa đơn hàng' });
//     }
// };

// // Xác nhận thanh toán PayPal
// const confirmPaypalPayment = async (req, res) => {
//     try {
//         const { paymentId, PayerID } = req.query;
//         const encodedPaymentId = encodeURIComponent(paymentId);
//         const encodedPayerID = encodeURIComponent(PayerID);
//         // Gọi service để xác nhận thanh toán PayPal
//         const order = await orderService.executePaypalPayment(encodedPaymentId, encodedPayerID);
//         res.status(200).json({ message: 'Thanh toán thành công', order });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Lỗi khi xác nhận thanh toán PayPal' });
//     }
// };


// //lịch sử thanh toán
// const getOrderHistory = async (req, res) => {
//     try {
//         const { userId } = req.params;
//         // Gọi service để lấy thông tin đơn hàng
//         const order = await orderService.getOrderHistory(userId);
//         res.status(200).json({ message: 'Đơn hàng đã thanh toán', order });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Lỗi khi lấy thông tin đơn hàng' });
//     }
// };

// //tao mã vạch
// const createBarcode = async (req, res) => {
//     try {
//         const { userId } = req.params;
//         // Gọi service để tạo mã vạch và lưu vào đơn hàng
//         await orderService.createBarcode(userId);
//         // Phản hồi thành công
//         res.status(200).json({ message: 'Tạo mã vạch thành công' });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Lỗi khi tạo mã vạch' });
//     }
// };

// //trả mã vạch
// const getBarcode = async (req, res) => {
//     try {
//         const { userId } = req.params;
//         // Gọi service để lấy thông tin đơn hàng và mã vạch
//         const order = await orderService.getBarcode(userId);
//         // Phản hồi với mã vạch
//         res.status(200).json({ barcode: order.barcode });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Lỗi khi lấy mã vạch' });
//     }
// };

module.exports =
{
    createOrder
    , getOrderById,
    // updateOrder, deleteOrder,
    // payWithPaypal, confirmPaypalPayment, getOrderHistory,
    // createBarcode, getBarcode
};
