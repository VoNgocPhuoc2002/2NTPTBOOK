const express = require('express');
const router = express.Router();
const CartController = require('../controller/CartController');

// Định nghĩa các route
router.post('/:userId/addtocart', CartController.addToCart);
router.post('/:userId/updatecartitem', CartController.updateCartItem);
router.delete('/:userId/removecartitem', CartController.removeCartItem);
router.get('/:userId/getcartitems', CartController.getCartItems);
router.delete('/:userId/removeallcartitems', CartController.removeAllCartItems);

module.exports = router;
