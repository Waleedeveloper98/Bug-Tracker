import { Router } from "express";
import { identifyUser } from "../middlewares/auth.middleware.js";
import { createBug, deleteBug, getAllBugs, getSingleBug, updateBug, assignBug, updateBugStatus, myAllBugs,getStats } from "../controllers/bug.controller.js";
import { bugAssignValidation, bugIdValidation, bugQueryValidation, bugStatusValidation, createBugValidation } from "../validators/bug.validator.js";
import { validation } from "../validators/validation.js";
import { isBugOwner } from "../middlewares/isBugOwner.middleware.js";

const bugRouter = Router()

bugRouter.post("/", identifyUser, createBugValidation, validation, createBug)
bugRouter.get("/", identifyUser, bugQueryValidation, validation, getAllBugs)
bugRouter.get("/my-bugs", identifyUser, myAllBugs)
bugRouter.get("/stats", identifyUser, getStats)
bugRouter.get("/:bugId", identifyUser, bugIdValidation, validation, getSingleBug)
bugRouter.patch("/:bugId", identifyUser, isBugOwner, bugIdValidation, validation, updateBug)
bugRouter.delete("/:bugId", identifyUser, isBugOwner, bugIdValidation, validation, deleteBug)
bugRouter.patch("/:bugId/assign", identifyUser, bugAssignValidation, validation, assignBug)
bugRouter.patch("/:bugId/status", identifyUser, bugStatusValidation, bugIdValidation, validation, updateBugStatus)

export default bugRouter