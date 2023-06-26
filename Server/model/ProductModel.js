const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    quantity: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    image: { type: String, required: true },
    categoryId: { type: ObjectId, ref: 'category' },
    status: { type: Boolean, default: true },
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;