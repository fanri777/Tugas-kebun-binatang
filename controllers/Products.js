// Import model Product
import Product from "../models/Products.js";
 
// Get semua product
export const getProducts = async (req, res) => {
    try {
        const product = await Product.findAll();
        res.send(product);
    } catch (err) {
        console.log(err);
    }
}
 
// Get product berdasarkan id
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(product[0]);
    } catch (err) {
        console.log(err);
    }
}
 
// Create product baru
export const createProduct = async (req, res) => {
    try {
        const result = await Product.create(req.body);
        res.json({
            "message": "Product Created",
            "result": result
        });
    } catch (err) { 
        console.log(err);
        return res.json(err.message)
    }
}
 
// Update product berdasarkan id
export const updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete product berdasarkan id
export const deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}