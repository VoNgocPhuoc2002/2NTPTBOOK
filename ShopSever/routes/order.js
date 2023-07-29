const express = require('express');
const router = express.Router();
const orderController = require('../controller/OrderController');

// Tạo đơn hàng mới
//http://localhost:3000/order/:userId/addorder
router.post('/:userId/addorder', orderController.createOrder);
router.get('/:userId/getorder', orderController.getOrderById);



module.exports = router;
