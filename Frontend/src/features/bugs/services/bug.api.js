import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

export const getAllBugs = async () => {
    const response = await api.get("/api/bugs/")
    return response.data
}

export const createBug = async ({ title, description, status, priority }) => {
    const response = await api.post("/api/bugs/", { title, description, status, priority })
    return response.data
}

export const updateABug = async (bugId, { title, description, status, priority }) => {
    const response = await api.patch("/api/bugs/" + bugId, { title, description, status, priority })
    return response.data
}

export const deleteBug = async (bugId) => {
    const response = await api.delete("/api/bugs/" + bugId)
    return response.data
}

export const updateBugStatus = async (bugId, { status }) => {
    const response = await api.patch(`/api/bugs/${bugId}/status`, { status })
    return response.data
}

export const myAllBugs = async () => {
    const response = await api.get("/api/bugs/my-bugs")
    return response.data
}