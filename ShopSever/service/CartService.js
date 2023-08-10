const cartModel = require('../model/CartModel');
const productModel = require('../model/ProductModel');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types; 
// const addToCart = async (userId, productId, quantity) => {
//   try {
//     // Step 1: Find the product with the given productId
//     const product = await productModel.findById(productId);
//     if (!product) {
//       throw new Error('Product not found');
//     }

//     // Step 2: Find the cart associated with the given userId
//     const cart = await cartModel.findOne({ userId });

//     if (cart) {
//       // Step 3: If the cart exists, check if the product is already in the cart
//       const existingProduct = cart.products.find(
//         (p) => p.productId.toString() === productId
//       );

//       if (existingProduct) {
//         // Step 4: If the product exists in the cart, update its quantity
//         existingProduct.quantity += quantity;
//       } else {
//         // Step 5: If the product doesn't exist in the cart, add it as a new item
//         cart.products.push({
//           productId: productId,
//           quantity: quantity,
//           name: product.name,
//           price: product.price,
//           image: product.image,
//         });
//       }

//       // Step 6: Save the cart with updated or new product information
//       await cart.save();
//       return cart; // Return the cart
//     } else {
//       // Step 7: If no cart exists for the user, create a new cart
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

//       // Step 8: Save the new cart
//       await newCart.save();
//       return newCart; // Return the newly created cart
//     }
//   } catch (error) {
//     console.log(error);
//     throw new Error('Error adding to cart: ');
//   }
// };
const addToCart = async (userId, productId, quantity) => {
  try {
    const product = await productModel.findById(productId);
    if (!product) {
      throw new Error('Product not found');
    }
    const cart = await cartModel.findOne({ userId });
    if (cart) {
      // Kiểm tra xem sản phẩm đã có trong giỏ hàng hay chưa
      const existingProduct = cart.products.find(p => p.productId.toString() === productId);
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
    throw new Error('Error adding to cart');
  }
};


// const addToCart = async (userId, productId, quantity) => {
//   try {
//     // Find the product with the given productId
//     const product = await productModel.findById(productId);
//     if (!product) {
//       throw new Error('Product not found');
//     }

//     // Find the cart associated with the given userId
//     let cart = await cartModel.findOne({ userId });

//     if (cart) {
//       // If the cart exists, check if the product is already in the cart
//       const existingProduct = cart.products.find(
//         (p) => p.productId.toString() === productId
//       );

//       if (existingProduct) {
//         // If the product exists in the cart, update its quantity
//         existingProduct.quantity += quantity;
//       } else {
//         // If the product doesn't exist in the cart, add it as a new item
//         cart.products.push({
//           productId: productId,
//           quantity: quantity,
//           name: product.name,
//           price: product.price,
//           image: product.image,
//         });
//       }
//     } else {
//       // If no cart exists for the user, create a new cart
//       cart = new cartModel({
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
//     }

//     // Save the cart with updated or new product information
//     await cart.save();
//     return cart; // Return the cart
//   } catch (error) {
//     console.log(error);
//     throw new Error('Error adding to cart: ' + error.message);
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
