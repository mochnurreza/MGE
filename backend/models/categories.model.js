import { DataTypes } from "sequelize";
import db from "../config/database.js";
import SequelizeSlugify from "sequelize-slugify";

export const Category = db.define("category", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        unique: true,
    },
}, {
    tableName: 'categories',
    timestamps: true,
});

SequelizeSlugify.slugifyModel(Category, {
    source: ['name'],
    slugOptions: { lower: true },
});