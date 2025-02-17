import express from "express";
import { register, login, logout, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js"; // Assuming the path of your middleware

const router = express.Router();

// Routes
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticated, updateProfile);  // Protected route
router.route("/logout").get(logout);  // Protected route
export default router;
