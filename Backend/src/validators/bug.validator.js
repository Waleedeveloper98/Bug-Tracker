import { body, param, query } from "express-validator";

export const createBugValidation = [
    body("title")
        .notEmpty().withMessage("Title is required")
        .isLength({ min: 3 })
        .withMessage("Title must be at least 3 characters long")
        .trim(),

    body("description")
        .notEmpty().withMessage("Description is required")
        .isLength({ min: 10 })
        .withMessage("Description must be at least 10 characters long")
        .trim(),

    body("priority")
        .notEmpty().withMessage("Priority is required")
        .isIn(["low", "medium", "high"])
        .withMessage("Priority must be low, medium, or high"),

    body("status")
        .notEmpty().withMessage("Status is required")
        .isIn(["open", "in-progress", "resolved"])
        .withMessage("Status must be open, in-progress, or resolved"),

    body("createdBy")
        .notEmpty().withMessage("createdBy is required")
        .isMongoId().withMessage("createdBy must be a valid MongoDB ID"),

    body("assignedTo")
        .notEmpty().withMessage("assignedTo is required")
        .isMongoId().withMessage("assignedTo must be a valid MongoDB ID")
];

export const bugIdValidation = [
    param("bugId").isMongoId().withMessage("Invalid MongoDB ID")
]

export const bugQueryValidation = [
    query("status")
        .optional()
        .isIn(["open", "in-progress", "resolved"])
        .withMessage("Status must be open, in-progress, or resolved"),
    query("priority")
        .optional()
        .isIn(["low", "medium", "high"])
        .withMessage("Priority must be low, medium, or high"),

]

export const bugAssignValidation = [
    body("assignedTo")
        .notEmpty()
        .withMessage("AssignedTo field is required")
]

export const bugStatusValidation = [
    body("status")
        .notEmpty()
        .withMessage("AssignedTo field is required")
        .isIn(["open", "in-progress", "resolved"])
        .withMessage("Status must be open, in-progress, or resolved"),
]