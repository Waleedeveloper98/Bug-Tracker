import { body } from "express-validator";

export const registerValidation = [

    body("username")
        .notEmpty().withMessage("username is required")
        .isLength({ min: 3, max: 20 }).withMessage("username length must be between 3 and 20 characters")
        .isAlphanumeric().withMessage("username must contain only letters and numbers")
        .trim()
        .toLowerCase(),

    body("email")
        .notEmpty().withMessage("email is required")
        .isEmail().withMessage("valid email is required")
        .isLength({ max: 200 }).withMessage("email must be under 200 characters")
        .normalizeEmail()
        .trim(),

    body("password")
        .notEmpty().withMessage("password is required")
        .isLength({ min: 6, max: 50 }).withMessage("password length must be between 6 and 50 characters")
        .trim()

];

export const loginValidation = [
    body("email")
        .notEmpty().withMessage("email is required")
        .isEmail().withMessage("valid email is required")
        .isLength({ max: 200 }).withMessage("email must be under 200 characters")
        .normalizeEmail()
        .trim(),

    body("password")
        .notEmpty().withMessage("password is required")
        .isLength({ min: 6, max: 50 }).withMessage("password length must be between 6 and 50 characters")
        .trim()
]