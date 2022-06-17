// Import express
import express from "express";
// Import Controller Product
import { 
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
 } from "../controllers/Products.js";
import { createZoo, deleteZoo, getJenisHewan, getZoo, getZooById, getZooByJenisHewan, getZooByNamaHewan, updateZoo } from "../controllers/zoo.js";
 
 // Init express router
const router = express.Router();
 
// Route get semua product
router.get('/products', getProducts);
// Route get product by id
router.get('/products/:id', getProductById);
// Route create product baru
router.post('/products', createProduct);
// Route update product by id
router.put('/products/:id', updateProduct); 
// Route delete product by id
router.delete('/products/:id', deleteProduct);
 

// Route get semua zoo
router.get('/zoo', getZoo);
// Route get zoo by id
router.get('/zoo/:id', getZooById);
// Route create zoo baru
router.post('/zoo', createZoo);
// Route update zoo by id
router.put('/zoo/:id', updateZoo); 
// Route delete zoo by id
router.delete('/zoo/:id', deleteZoo);
// Route get zoo by name
router.get('/zoo/cek/:nama_hewan', getZooByNamaHewan);
// Route count zoo by jenis_hewan
router.get('/zoo/total/:jenis_hewan', getZooByJenisHewan);
// Route get all zoo jenis_hewan
router.get('/zoo/jenis/jenis-hewan', getJenisHewan);

// export router
export default router;