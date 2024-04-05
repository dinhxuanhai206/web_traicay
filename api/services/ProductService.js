const Product = require('../models/Product');
const createProduct = async (productData) => {
    const product = new Product(productData);
    return await product.save();
}

const getAllProduct = async () => {
    return await Product.find();
}

const getProduct = async (id) => {
    return await Product.findById(id)
}

module.exports = {
    createProduct,
    getAllProduct,
    getProduct
};