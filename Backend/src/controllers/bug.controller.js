import { asyncHandler } from "../middlewares/asyncHandler.js";
import bugModel from "../models/bug.model.js";
import { AppError } from "../utils/AppError.js"


export const createBug = asyncHandler(async (req, res, next) => {
    const { title, description, status, priority } = req.body

    const isBugAlreadyExist = await bugModel.findOne({
        $or: [{ title }, { description }]
    })
    if (isBugAlreadyExist) {
        return next(new AppError("This bug already exist", 409))
    }

    const createdBy = req.user.id

    const bug = await bugModel.create({
        title,
        description,
        priority,
        status,
        createdBy: createdBy,
        assignedTo: null
    })

    return res.status(201).json({
        success: true,
        message: "bug created successfully",
        data: bug
    })
})

export const getAllBugs = asyncHandler(async (req, res, next) => {
    const { status, priority } = req.query

    const filter = {}
    if (status) {
        filter.status = status
    }
    if (priority) {
        filter.priority = priority
    }
    const bugs = await bugModel.find(filter).sort({ createdAt: -1 })

    return res.status(200).json({
        success: true,
        message: "all bugs list",
        data: bugs
    })
})

export const getSingleBug = asyncHandler(async (req, res, next) => {
    const bugId = req.params.bugId;

    const bug = await bugModel.findById(bugId)

    return res.status(200).json({
        success: true,
        message: "bug found",
        data: bug
    })
})

export const updateBug = asyncHandler(async (req, res, next) => {
    const bugId = req.params.bugId;
    const { title, description, status, priority } = req.body

    const updatedBug = await bugModel.findByIdAndUpdate(bugId, { title, description, status, priority }, { new: true })

    return res.status(200).json({
        success: true,
        message: "bug updated",
        data: updatedBug
    })
})

export const deleteBug = asyncHandler(async (req, res, next) => {
    const bugId = req.params.bugId;

    await bugModel.findByIdAndDelete(bugId)

    return res.status(200).json({
        success: true,
        message: "bug deleted",
    })
})


export const assignBug = asyncHandler(async (req, res, next) => {
    const bugId = req.params.bugId;
    const { assignedTo } = req.body

    const bug = await bugModel.findById(bugId)

    if (!bug) {
        return next(new AppError("Bug not found", 404))
    }

    const assignedToUpdatedBug = await bugModel.findByIdAndUpdate(bugId, { assignedTo: assignedTo }, { new: true })

    return res.status(200).json({
        success: true,
        message: "assignTo updated",
        data: assignedToUpdatedBug
    })

})

export const updateBugStatus = asyncHandler(async (req, res, next) => {
    const bugId = req.params.bugId;
    const { status } = req.body

    const bug = await bugModel.findById(bugId)

    if (!bug) {
        return next(new AppError("Bug not found", 404))
    }

    const updatedBugStatus = await bugModel.findByIdAndUpdate(bugId, { status: status }, { new: true })

    return res.status(200).json({
        success: true,
        message: "status updated",
        data: updatedBugStatus
    })
})

export const myAllBugs = asyncHandler(async (req, res, next) => {
    const userId = req.user.id

    const bugs = await bugModel.find({ createdBy: userId })

    return res.status(200).json({
        success: true,
        message: "Your all bugs",
        data: bugs
    })
})

export const getStats = asyncHandler(async (req, res) => {

    const allBugs = await bugModel.find()

    const [openBugs, inProgressBugs, resolvedBugs] = await Promise.all([
        await bugModel.find({ status: "open" }),
        await bugModel.find({ status: "in-progress" }),
        await bugModel.find({ status: "resolved" })
    ])

    res.status(200).json({
        success: true,
        data: {
            total: allBugs.length,
            openCount: openBugs.length,
            inProgressCount: inProgressBugs.length,
            resolvedCount: resolvedBugs.length,
        }
    })
})