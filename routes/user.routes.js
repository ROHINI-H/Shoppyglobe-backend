import express from "express";
import { registerUser, userLogin } from "../controllers/user.controller.js";

// create a new router instance
const router = express.Router();

// routes
router.post("/register", registerUser);
router.post("/login", userLogin);

export default router;