import bcrypt from "bcryptjs"
import userModel from "../models/user.model.js"
import jwt from "jsonwebtoken"
import { asyncHandler } from "../middlewares/asyncHandler.js"
import { AppError } from "../utils/AppError.js"
import redis from "../config/cache.js"

export const register = asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body

    const isUserAlreadyExist = await userModel.findOne({
        $or: [{ username }, { email }]
    })

    if (isUserAlreadyExist) {
        return next(new AppError("User already exists. Please log in.", 409))
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username, email, password: hashPassword
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET, { expiresIn: "3d" })

    res.cookie("token", token)

    return res.status(201).json({
        success: true,
        message: "user registered",
        data: {
            username: user.username,
            email: user.email
        }
    })
})


export const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body

    const user = await userModel.findOne({ email }).select("+password")

    if (!user) {
        return next(new AppError("Invalid Credentials", 401))
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password)

    if (!isPasswordMatched) {
        return next(new AppError("Invalid Credentials", 401))
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET, { expiresIn: "3d" })

    res.cookie("token", token)

    return res.status(200).json({
        success: true,
        message: "user logged-in",
        data: {
            username: user.username,
            email: user.email
        }
    })
})


export const logout = asyncHandler(async (req, res, next) => {
    const token = req.cookies.token
    res.clearCookie("token")
    await redis.set(token, Date.now().toString(), "EX", 60 * 60)

    return res.status(200).json({
        success: true,
        message: "user logged-out"
    })
})

