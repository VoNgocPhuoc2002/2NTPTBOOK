const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CategorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    
    
});
const Category =mongoose.model('category', CategorySchema);
module.exports = Category;