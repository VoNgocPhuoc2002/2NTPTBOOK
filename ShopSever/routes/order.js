const express = require('express');
const router = express.Router();
const orderController = require('../controller/OrderController');

// Tạo đơn hàng mới
//http://localhost:3000/order/:userId/addorder
router.post('/:userId/addorder', orderController.createOrder);
router.get('/:userId/getorder', orderController.getOrderById);
router.get('/:_id/getorderDetail', orderController.getOrderByOrderId);
router.post('/:userId/:_id/updateStatus', orderController.updateStatus);
router.post('/:userId/:_id/cancelOrder', orderController.cancelOrder);
router.get('/getAllOrder', orderController.getAllOrder);



module.exports = router;
