import express from "express";
import { createProduct, deleteProduct, getProducts, getSingleProduct, updateProduct } from "../controllers/product.controller.js";

// create a new router instance
const router = express.Router();

// routes
router.get("/", getProducts);
router.get("/:id", getSingleProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;