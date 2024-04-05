const productService = require('../services/ProductService');
const createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const newProduct = await productService.createProduct(productData);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getAllproduct = async (req, res) => {
    try {
        const products = await productService.getAllProduct()
        res.json(products);
    } catch {
        res.status(500).json({ message: error.message });
    }
}

const getProduct = async (req, res) => {
    try {
        const product = await productService.getProduct(req.params.id)
        if (product === null) {
            return res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    createProduct,
    getAllproduct,
    getProduct
}