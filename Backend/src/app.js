import express from "express"
import authRouter from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"
import { errorHandler } from "./middlewares/errorHandler.js"
import bugRouter from "./routes/bug.routes.js"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))


app.use("/api/auth", authRouter)
app.use("/api/bugs", bugRouter)


app.use(errorHandler)

export default app