const cartService = require('../service/CartService');

//thêm sản phẩm vào giỏ hàng

const createCart = async (req, res) => {
  const { userId } = req.body;
  try {
    const newCart = await cartService.createCart(userId);
    res.json(newCart);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
const addProductToCart = async (req, res) => {
  const cartId = req.params.id;
    const { productId, quantity } = req.body;
    try {
      const updatedCart = await cartService.addProductToCart(cartId, productId, quantity);
      if (updatedCart) {
        res.json(updatedCart);
      } else {
        res.status(404).json({ error: 'Cart not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = { addProductToCart,createCart };
