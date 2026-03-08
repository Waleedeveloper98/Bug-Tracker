import mongoose from "mongoose";

const bugSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "description is required"],
        trim: true
    },
    priority: {
        type: String,
        required: [true, "priority is required"],
        enum: ["low", "medium", "high"]
    },
    status: {
        type: String,
        required: [true, "status is required"],
        enum: ["open", "in-progress", "resolved"]
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "createdBy field is required"],
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        default: null
    }
}, { timestamps: true })

const bugModel = mongoose.model("bug", bugSchema)

export default bugModel