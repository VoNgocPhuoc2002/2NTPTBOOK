const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    code : { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    countryside: { type: String, required: true },
    processingplace: { type: String, required: true },
    size: { type: String, required: true },
    weight: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    discount: { type: Number, required: true, default: 1 },

    quantity: { type: Number, required: true, default: 0 },
    favorite: { type: String, default: false },
    isFutured: { type: String, default: false },
    dateCreated: { type: Date, default: Date.now },
    categoryId: { type: ObjectId, ref: 'category' },
    color: { type: String, default: false },

});

module.exports = mongoose.model('product', ProductSchema);

