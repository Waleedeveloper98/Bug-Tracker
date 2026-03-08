import jwt from "jsonwebtoken"
import redis from "../config/cache.js";

export const identifyUser = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        const error = new Error("Token not found")
        error.statusCode = 401
        return next(error)
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded;
        next()
    } catch (error) {
        const err = new Error("User not found")
        err.statusCode = 401
        return next(err)
    }

}