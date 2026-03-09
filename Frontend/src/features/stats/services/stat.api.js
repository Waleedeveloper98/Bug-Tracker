import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

export const getStats = async () => {
    const response = await api.get("/api/bugs/stats")
    return response.data
}