const OrderModel = require('../model/OrderModel');
const moment = require('moment');



// Tạo một đơn hàng mới
const createOrder = async (userId, cart, total, addressId) => {
    try {
        console.log('Received data:', { userId, cart, total, addressId });
        // Trích xuất thông tin sản phẩm từ mảng productId
        const orderHour = moment().format('HH:mm A'); // Lấy giờ hiện tại và định dạng theo 'HH:mm A'
        const timeBuy = moment().format('MMM D, YYYY'); // Lấy ngày hiện tại và định dạng theo 'DD/MM/YYYY'
        const order = await OrderModel.create({ userId, cart, total, addressId, orderHour, timeBuy });
        console.log('Order created:', order);
        return order;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi khi tạo đơn hàng');
    }
};

const updateStatus = async (userId, _id) => {
    try {
        const order = await OrderModel.findOne({ userId, _id });
        if (!order) {
            throw new Error('Order not found');
        }
        if (order.status ==="pending"){
            order.status = 'success'; // Cập nhật trạng thái thành công
            await order.save(); // Lưu lại đơn hàng    
        }
        return order;
    } catch (error) {
        console.log(error);
        throw new Error('Error updating status');
    }
};
const cancelOrder = async (userId, _id) => {
    try {
        const order = await OrderModel.findOne({userId, _id});
        if (!order) {
            throw new Error('Order not found');
        }
        if (order.status ==="pending"){
            order.status = 'fail'; // Cập nhật trạng thái thành công
            await order.save(); // Lưu lại đơn hàng    
        }
        return order;
    } catch (error) {
        console.log(error);
        throw new Error('Error updating status');
    }
};





// Lấy thông tin tất cả đơn hàng theo ID
const getOrderById = async (userId) => {
    try {
        const orders = await OrderModel.find({ userId });

        return orders;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi khi lấy thông tin đơn hàng');
    }
};
const getOrderByOrderId = async (_id) => {
    try {
      const order = await OrderModel.findById(_id);
  
      return order;
    } catch (error) {
      console.log(error);
      throw new Error('Lỗi khi lấy thông tin đơn hàng');
    }
  };
  const getAllOrder = async () => {
    try {
      const orders = await OrderModel.find();
      return orders;
    } catch (error) {
      console.log(error);
      throw new Error('Lỗi khi lấy thông tin đơn hàng');
    }
  };
  

// // Cập nhật thông tin đơn hàng trạng thái đơn hàng
// const updateOrder = async (userId, status, paymentStatus) => {
//     try {
//         const order = await OrderModel.findOne({ userId });
//         if (!order) {
//             throw new Error('Không tìm thấy đơn hàng');
//         }
//         order.status = status;
//         order.paymentStatus = paymentStatus;
//         await order.save();
//         return order;
//     } catch (error) {
//         console.log(error);
//         throw new Error('Lỗi khi cập nhật đơn hàng');
//     }
// };

// // Xóa đơn hàng
// const deleteOrder = async (userId) => {
//     try {
//         await OrderModel.deleteMany({ userId });
//         console.log('Xóa đơn hàng thành công');
//         return true;
//     } catch (error) {
//         console.log(error);
//         throw new Error('Lỗi khi xóa đơn hàng');
//     }
// };
// // //lịch sử thanh toán
// const getOrderHistory = async (userId) => {
//     try {
//         const orders = await OrderModel.find({ userId })
//             .populate('cart')
//             .populate('addressId')
//             .populate('shippingId')
//             .populate('promoCode');
//         if (!orders) {
//             throw new Error('Không tìm thấy đơn hàng');
//         }
//         console.log('Lịch sử thanh toán:', orders);
//         return orders;
//     } catch (error) {
//         console.log(error);
//         throw new Error('Lỗi khi lấy thông tin đơn hàng');
//     }
// };


module.exports =
{
    createOrder, getOrderById,
    getOrderByOrderId,
    updateStatus,cancelOrder,
    getAllOrder
    // updateOrder, deleteOrder,
    // createPaypalPayment, executePaypalPayment,
    // payWithPaypal,
    // getOrderHistory, createBarcode, getBarcode
};
