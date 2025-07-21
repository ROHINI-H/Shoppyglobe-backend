import express from "express";
import authentication from "../middlewares/authentication.js";
import { addItem, getCartItems, removeItem, updateItem } from "../controllers/cart.controller.js";

// create new router instance
const router = express.Router();

// routes
router.post("/", authentication, addItem);
router.get("/", authentication, getCartItems);
router.put("/:id", authentication, updateItem);
router.delete("/:id", authentication, removeItem);

export default router;