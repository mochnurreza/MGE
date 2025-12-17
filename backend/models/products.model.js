import { DataTypes } from "sequelize";
import db from "../config/database.js";
import SequelizeSlugify from "sequelize-slugify";

export const Product = db.define("product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "category_id",
    },
    Image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    slug: {
        type: DataTypes.STRING,
        unique: true,
    },
}, {
    tableName: 'products',
    timestamps: true,
});

SequelizeSlugify.slugifyModel(Product, {
    source: ['name'],
    slugOptions: { lower: true },
});