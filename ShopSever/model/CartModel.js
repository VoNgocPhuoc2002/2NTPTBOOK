const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CartSchema = new Schema(
  {
    userId: { type: ObjectId, required: true },
    products: [
      {
        productId: { type: ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, default: 1 },
        name: { type: String },
        price: { type: Number },
        image: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Cart', CartSchema);

