const cartModel = require('../model/CartModel');
const productModel = require('../model/ProductModel');

const addProductToCart = async (req, res) => {
  const cartId = req.params.id;
  const { productId, quantity } = req.body;
  try {
    const cart = await cartModel.findById(cartId);
    if (!cart) {
      return null; // Cart not found
    }
    
    const product = await productModel.findById(productId);
    if (!product) {
      return null; // Product not found
    }

    const existingProduct = cart.products.find((p) => p.productId.toString() === productId);
    if (existingProduct) {
      // If product already exists in cart, update the quantity
      existingProduct.quantity += quantity;
    } else {
      // If product doesn't exist in cart, add it
      const { name, price, image } = product;
      cart.products.push({
        productId,
        quantity,
        name,
        price,
        image,
      });
    }

    return await cart.save();
  } catch (error) {
    throw new Error('Failed to add product to cart');
  }
};
  const createCart= async (userId) => {
    try {
      const newCart = new Cart({
        userId,
        products: [],
      });
      return await newCart.save();
    } catch (error) {
      throw new Error('Failed to create cart');
    }
  }

module.exports = { addProductToCart,createCart };
