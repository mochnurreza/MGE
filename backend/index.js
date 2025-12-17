import dotenv from "dotenv";
import express from 'express';
import authRoutes from './routes/auth.routes.js';
import db from './config/database.js';
import categoryRoutes from './routes/category.routes.js';
import { authToken } from "./middleware/auth.middleware.js";
import productRoutes from './routes/product.routes.js';
import cors from 'cors';
import "./models/index.js";
dotenv.config();



const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api/auth', authRoutes);
app.use('/api/categories', authToken, categoryRoutes);
app.use('/api/products', authToken, productRoutes);


const startServer = async () => {
  try {
    console.log("⏳ Connecting to database...");

    await db.authenticate();
    console.log("Database connection successful");

    
    await db.sync();
    console.log("Database synced");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to database");
    console.error(error.message);
    process.exit(1);
  }
};

startServer();
