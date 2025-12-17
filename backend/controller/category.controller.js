import * as categoryService from '../service/category.service.js';

export const createCategory = async (req, res) => {
    try {
        const category = await categoryService.createCategory(req.body);
        res.status(201).json({success: true,data: category});
    } catch (error) {
        res.status(400).json({success: false, message: error.message});
    }
};

export const getAllCategories = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.status(200).json({success: true, data: categories});
    } catch (error) {
        res.status(400).json({success: false, message: error.message});
    }
};

export const getCategoryById = async (req, res) => {
    try {
        const category = await categoryService.getCategoryById(req.params.slug);
        res.status(200).json({success: true, data: category});
    } catch (error) {
        res.status(400).json({success: false, message: error.message});
    }
};

export const updateCategory = async (req, res) => {
    try {
        const category = await categoryService.updateCategory(req.params.slug, req.body);
        res.status(200).json({success: true, data: category});
    } catch (error) {
        res.status(400).json({success: false, message: error.message});
    }
};

export const deleteCategory = async (req, res) => {
    try {
        await categoryService.deleteCategory(req.params.slug);
        res.status(200).json({success: true, message: "Category deleted successfully"});
    } catch (error) {
        res.status(400).json({success: false, message: error.message});
    }
};