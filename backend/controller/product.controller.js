import * as productService from "../service/product.service.js";

export const createProduct = async (req, res) => {
  try {
    const { name, price, description, categoryId, Image } = req.body;

    const image = req.file
      ? req.file.name
      : null;

    const product = await productService.createProduct({
        name,
        price,
        description,
        categoryId: Number(categoryId),
        Image: image,
   
    });
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.slug);
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { name, price, description, categoryId, Image } = req.body;

    const image = req.file
      ? req.file.filename
      : null;

    const product = await productService.updateProduct(
      req.params.slug,
      {
        name,
        price,
        description,
        categoryId,
        Image: image,
      }
    );

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


export const deleteProduct = async (req, res) => {
  try {
    await productService.deleteProduct(req.params.slug);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
