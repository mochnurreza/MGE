import { Category } from "./categories.model.js";
import { Product } from "./products.model.js";

Product.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});

Category.hasMany(Product, {
  foreignKey: "categoryId",
});