
const productModel = require('../model/ProductModel');

const get = async () => {
    //select * form products
    const products = await productModel.find({}).populate('categoryId', '_id name');
    return products;
}


const getOne = async (id) => {
    //select * from products where id = id
    const product = await productModel.findById(id).populate('categoryId', '_id name'); //Object
    return product;
}

const create = async(code, name,author, titledescription,description, countryside, processingplace, size, weight, image, price,discount, quantity, favorite,isFutured,dateCreated,categoryId) => {
    //insert into products (name, price, image, description, category_id) 
    //values (name, price, image, description, category_id)
    const model = new productModel({code, name,author,titledescription, description, countryside, processingplace, size, weight, image, price,discount, quantity, favorite,isFutured,dateCreated,categoryId});
  
    await model.save();
    return model;
}

const update = async (id,code, name,author,titledescription, description, countryside, processingplace, size, weight, image, price, quantity, favorite,isFutured,dateCreated,categoryId) => {
    //update products set name = name, price = price, image = image, description = description categoryId
    //where id = id
    const product = await productModel.findById(id);
    const model = await productModel.findByIdAndUpdate(id,
        {code, name,author,titledescription, description, countryside, processingplace, size, weight, image: image ? image : product.image, price, quantity, favorite,isFutured,dateCreated,categoryId });
    return model;
}
const generateTransactionId = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetters = letters.charAt(Math.floor(Math.random() * letters.length)) +
        letters.charAt(Math.floor(Math.random() * letters.length));
    const randomNumbers = Math.random().toString().substr(2, 10);
    return randomLetters + randomNumbers;
};

const remove = async (id) => {
    //delete from products where id = id
    await productModel.deleteOne({ _id: id });
}

const favourite = async (id) => {
    //update products set favorite = 1 where id = id
    const model = await productModel.findByIdAndUpdate(id, { favorite: 1 });
    return model;
}




module.exports = { get, create, remove, getOne, update, favourite,generateTransactionId };