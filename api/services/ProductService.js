const Product = require('../models/Product');

async function createProduct(productData) {
  const newProduct = new Product(productData);
  return await newProduct.save();
}

async function updateProduct(id, productData) {
  return await Product.findByIdAndUpdate(id, { $set: productData }, { new: true });
}

async function deleteProduct(id) {
  return await Product.findByIdAndDelete(id);
}

async function getProductById(id) {
  return await Product.findById(id);
}

async function getAllProducts() {
  return await Product.find();
}

async function getNewProducts() {
  return await Product.find().sort({ createdAt: -1 }).limit(1);
}

async function getProductsByCategory(category) {
  return await Product.find({ categories: { $in: [category] } });
}

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  getAllProducts,
  getNewProducts,
  getProductsByCategory,
};