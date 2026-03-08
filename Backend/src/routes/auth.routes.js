import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controller.js";
import { identifyUser } from "../middlewares/auth.middleware.js";

const authRouter = Router()

authRouter.post("/register", register)
authRouter.post("/login", login)
authRouter.get("/logout", identifyUser, logout)

export default authRouter