const cartModel = require('../model/CartModel');
const productModel = require('../model/ProductModel');
const mongoose = require('mongoose');
const { Types } = mongoose;
const addToCart = async (userId, productId, quantity) => {
  try {
    const product = await productModel.findById(productId);
    if (!product) {
      throw new Error('Product not found');
    }

    const cart = await cartModel.findOne({ userId });

    if (cart) {
      const existingProduct = cart.products.find(
        (p) => p.productId.toString() === productId
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        cart.products.push({
          productId: productId,
          quantity: quantity,
          name: product.name,
          price: product.price,
          image: product.image,
        });
      }

      await cart.save();
      return cart;
    } else {
      const newCart = new cartModel({
        userId: userId,
        products: [
          {
            productId: productId,
            quantity: quantity,
            name: product.name,
            price: product.price,
            image: product.image,
          },
        ],
      });

      await newCart.save();
      return newCart;
    }
  } catch (error) {
    console.log(error);
    throw new Error('Error adding to cart: ');
  }
};

// const addToCart = async (userId, productId, quantity) => {
//   try {
//     const product = await productModel.findById(productId);
//     if (!product) {
//       throw new Error('Product not found');
//     }

//     const cart = await cartModel.findOne({ userId });

//     if (cart) {
//       const existingProduct = cart.products.find(
//         (p) => p.productId.toString() === productId
//       );

//       if (existingProduct) {
//         existingProduct.quantity += quantity;
//       } else {
//         cart.products.push({
//           productId: productId,
//           quantity: quantity,
//           name: product.name,
//           price: product.price,
//           image: product.image,
//         });
//       }

//       await cart.save();
//       return cart;
//     } else {
//       const newCart = new cartModel({
//         userId: userId,
//         products: [
//           {
//             productId: productId,
//             quantity: quantity,
//             name: product.name,
//             price: product.price,
//             image: product.image,
//           },
//         ],
//       });

//       await newCart.save();
//       return newCart;
//     }
//   } catch (error) {
//     console.log(error);
//     throw new Error('Error adding to cart: ');
//   }
// };




const updateCartItem = async (userId, productId, quantity) => {
  try {
    const cart = await cartModel.findOne({ userId });
    if (!cart) {
      throw new Error('Cart not found');
    }
    const product = cart.products.find(p => p.productId.toString() === productId);
    if (!product) {
      throw new Error('Product not found in cart');
    }
    product.quantity += quantity;
    await cart.save();
    return cart;
  } catch (error) {
    console.log(error);
    throw new Error('Error updating cart item');
  }
};

const removeCartItem = async (userId, productId) => {
  try {
    const cart = await cartModel.findOne({ userId });
    console.log("cart", cart);
    if (!cart) {
      throw new Error('Cart not found');
    }
    const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    if (productIndex === -1) {
      throw new Error('Product not found in cart');
    }
    cart.products.splice(productIndex, 1);
    await cart.save();
    return cart;
  } catch (error) {
    console.log(error);
    throw new Error('Error removing cart item');
  }
};

const getCartItems = async (userId) => {
  try {
    const cart = await cartModel.findOne({ userId });
    if (!cart) {
      throw new Error('Cart not found');
    }
    return cart;
  } catch (error) { 
    console.log(error);
    throw new Error('Error getting cart');
  }
};

const removeAllCartItems = async (userId) => {
  try {
    const cart = await cartModel.findOne({ userId });
    if (!cart) {
      throw new Error('Cart not found');
    }
    // cart.products = [];
    cart.products.splice(0, cart.products.length);
    await cart.save();
    return cart;
  } catch (error) {
    console.log(error);
    throw new Error('Error removing all cart items');
  }
};

module.exports = { addToCart, updateCartItem, removeCartItem, getCartItems, removeAllCartItems };
