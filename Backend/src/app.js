import express from "express"
import authRouter from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"
import { errorHandler } from "./middlewares/errorHandler.js"
import bugRouter from "./routes/bug.routes.js"

const app = express()
app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", authRouter)
app.use("/api/bugs", bugRouter)


app.use(errorHandler)

export default app