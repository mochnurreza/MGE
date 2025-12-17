import express from "express";
import { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } from "../controller/category.controller.js";

const router = express.Router();

router.post("/",  createCategory);
router.get("/", getAllCategories);
router.get("/:slug", getCategoryById);
router.put("/:slug", updateCategory);
router.delete("/:slug", deleteCategory);

export default router;