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

export const updateTitleAndDescription = async (bugId, { title, description }) => {
    const response = await api.patch("/api/bugs/" + bugId, { title, description })
    return response.data
}