const express = require('express');
const router = express.Router();
const orderController = require('../controller/OrderController');

// Tạo đơn hàng mới
//http://localhost:3000/order/:userId/addorder
router.post('/:userId/addorder', orderController.createOrder);

// Lấy thông tin đơn hàng theo ID
//http://localhost:3000/order/:userId/getorder
router.get('/:userId/getorder', orderController.getOrderById);

// // Cập nhật thông tin đơn hàng
//http://localhost:3000/order/:userId/updateOrder
router.post('/:userId/updateOrder', orderController.updateOrder);

// Xóa đơn hàng
//http://localhost:3000/order/:userId/removeOrder
router.delete('/:userId/removeOrder', orderController.deleteOrder);

// Gọi thanh toán PayPal
//http://localhost:3000/order/:userId/payWithPaypal
router.get('/:userId/payWithPaypal', orderController.payWithPaypal);

// Xác nhận thanh toán PayPal
//http://localhost:3000/order/success
router.get('/success', orderController.confirmPaypalPayment);

// Hủy thanh toán PayPal
//http://localhost:3000/order/cancel
router.get('/cancel', function (req, res, next) {
    res.send('cancel');
});

//lịch sử thanh toán
//http://localhost:3000/order/:userId/getOrderHistory
router.get('/:userId/getOrderHistory', orderController.getOrderHistory);

// tạo mã vạch
//http://localhost:3000/order/:userId/getBarcode
router.post('/:userId/createBarcode', orderController.createBarcode);

// lấy mã vạch
//http://localhost:3000/order/:userId/getBarcode
router.get('/:userId/getBarcode', orderController.getBarcode);

module.exports = router;
