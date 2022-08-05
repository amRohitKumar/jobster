import express from "express";
const router = express.Router();
import isLogin from "../middlewares/auth.js";
import { register, login, updateUser } from "../controllers/authController.js";

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/updateUser").patch(isLogin, updateUser);

export default router;
