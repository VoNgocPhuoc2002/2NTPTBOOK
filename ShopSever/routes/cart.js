const express = require('express');
const router = express.Router();
const CartController = require('../controller/CartController');

// Thêm sản phẩm vào giỏ hàng
router.post('/addtocart/:id', CartController.addProductToCart);
router.post('/createcart', CartController.createCart);

  

module.exports = router;
