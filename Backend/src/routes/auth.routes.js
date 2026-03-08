import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controller.js";
import { identifyUser } from "../middlewares/auth.middleware.js";
import { loginValidation, registerValidation } from "../validators/auth.validator.js";
import { validation } from "../validators/validation.js";

const authRouter = Router()

authRouter.post("/register", registerValidation, validation, register)
authRouter.post("/login", loginValidation, validation, login)
authRouter.get("/logout", identifyUser, logout)

export default authRouter