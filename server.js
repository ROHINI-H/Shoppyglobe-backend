import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import userRoutes from "./routes/user.routes.js";
import handleError from "./middlewares/handleError.js";

//Load the environment variables
dotenv.config();

// creates the Express app instance
const app = express();

// used to parse the post requests
app.use(express.json());

// routes
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/", userRoutes);

// Middleware to handle errors
app.use(handleError);

// Connection to db
mongoose.connect(process.env.DB_URL)
    .then(() => app.listen(process.env.PORT || 4500, () => console.log("Server running on port 4500")))
    .catch(err => console.log(err));

