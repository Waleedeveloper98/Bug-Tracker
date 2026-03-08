import bugModel from "../models/bug.model.js";
import { AppError } from "../utils/AppError.js";
import { asyncHandler } from "./asyncHandler.js";

export const isBugOwner = asyncHandler(async (req, res, next) => {
    const bugId = req.params.bugId;

    const bug = await bugModel.findById(bugId)
    if (!bug) {
        return next(new AppError("Bug not found", 404))
    }

    const loggedInUser = req.user.id;
    const insideBugUserId = bug.createdBy.toString()

    if (loggedInUser !== insideBugUserId) {
        return next(new AppError("You are not allowed to perform this action", 403))
    }
    next()
})
