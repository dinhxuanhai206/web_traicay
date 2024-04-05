const productService = require('../services/productService');

async function createProduct(req, res) {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function updateProduct(req, res) {
  try {
    const updatedProduct = await productService.updateProduct(req.params.id, req.body);
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteProduct(req, res) {
  try {
    await productService.deleteProduct(req.params.id);
    res.status(200).json('Product has been deleted...');
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getProductById(req, res) {
  try {
    const product = await productService.getProductById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getAllProducts(req, res) {
  try {
    const qNew = req.query.new;
    const qCategory = req.query.category;

    let products;

    if (qNew) {
      products = await productService.getNewProducts();
    } else if (qCategory) {
      products = await productService.getProductsByCategory(qCategory);
    } else {
      products = await productService.getAllProducts();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  getAllProducts,
};