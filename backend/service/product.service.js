import { Product } from "../models/products.model.js";
import { Category } from "../models/categories.model.js";

export const createProduct = async ({
  name,
  price,
  description,
  categoryId,
  image,
}) => {
  if (!name || !price || !description || !categoryId) {
    throw new Error(
      "Product name, price, description, and category cannot be empty"
    );
  }
  const existingProduct = await Product.findOne({ where: { name } });
  if (existingProduct) {
    throw new Error("Product already exists");
  }
  const product = await Product.create({
    name,
    price,
    description,
    categoryId,
    Image: image,
  });

  const result = await Product.findByPk(product.id, {
    include: [
      {
        model: Category,
        as: "category",
        attributes: ["id", "name", "slug"],
      },
    ],
  });
  return result;
};

export const getAllProducts = async () => {
  const products = await Product.findAll({
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: Category,
        as: "category",
        attributes: ["id", "name", "slug"],
      },
    ],
  });
  if (products.length === 0) {
    throw new Error("No products found");
  }
  return products;
};

export const getProductById = async (slug) => {
  const product = await Product.findOne({
    where: { slug },
  });
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

export const updateProduct = async (
  slug,
  { name, price, description, categoryId, image }
) => {
  const product = await Product.findOne({
    where: { slug },
  });

  if (!product) {
    throw new Error("Product not found");
  }

  product.name = name ? name.trim() : product.name;
  product.price = price ?? product.price;
  product.description = description ?? product.description;
  product.categoryId = Number(categoryId);

  if (image) {
    product.Image = image;
  }

  await product.save();
  return product;
};

export const deleteProduct = async (slug) => {
  const product = await Product.findOne({ where: { slug } });
  if (!product) {
    throw new Error("Product not found");
  }
  await product.destroy();
  return;
};
