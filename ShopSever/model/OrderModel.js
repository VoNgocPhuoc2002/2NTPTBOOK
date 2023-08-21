
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CartItemSchema = new Schema({
    productId: { type: ObjectId, ref: 'product' },
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 1 }
  });
const OrderSchema = new Schema({
    userId: { type: ObjectId, ref: 'user' },
    cart: [CartItemSchema],
    total: { type: Number, default: 0 },
    addressId: { type: ObjectId, ref: 'address' },
    status: { type: String, default: 'pending' },
    timeBuy: { type: String },
    // Thêm trường orderHour để lưu giờ đặt đơn hàng
    orderHour: { type: String },
    //mã đơn hàng
    TransactionId: { type: String, default: null }
});

module.exports = mongoose.model('order', OrderSchema);
