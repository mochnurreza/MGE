import { Category } from "../models/categories.model.js";


export const createCategory = async ({name}) => {
    if(!name.trim()){
        throw new Error("Category name cannot be empty");
    }
    const existingCategory = await Category.findOne({ where: { name } });
    if(existingCategory) {
        throw new Error("Category already exists");
    }
    const category = await Category.create({ name });
    return category;
};

export const getAllCategories = async () => {
    const categories = await Category.findAll();
    if(categories.length === 0){
        throw new Error("No categories found");
    }
    return categories;
};

export const getCategoryById = async (slug) => {
    const category = await Category.findByPk({
        where: { slug }
    });

    if(!category){
        throw new Error("Category not found");
    }

    return category;
}

export const updateCategory = async (slug, { name }) => {
    const category = await Category.findOne({ where: { slug } });
    if(!category){
        throw new Error("Category not found");
    }
    category.name = name.trim();

    const save = category.save();
    return save;
};

export const deleteCategory = async (slug) => {
    const category = await Category.findOne({ where: { slug } });
    if(!category){
        throw new Error("Category not found");
    }
    await category.destroy();
    return;
}