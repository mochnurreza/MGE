import express from 'express';
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from '../controller/product.controller.js';
import upload from '../utils/multer.js'
const router = express.Router();

router.post("/add", upload.single("image"), createProduct);
router.get("/", getAllProducts);
router.get("/:slug", getProductById);
router.put("/:slug", upload.single("image"), updateProduct);
router.delete("/:slug", deleteProduct);

export default router;