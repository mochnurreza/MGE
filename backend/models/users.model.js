import { DataTypes } from "sequelize";
import db from "../config/database.js";
import { hashPassword } from "../utils/bcrypt.js";


export const User = db.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
},
{
    tableName: "users",
    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                user.password = await hashPassword(user.password);
            }
        }
    },
    timestamps: true,
});