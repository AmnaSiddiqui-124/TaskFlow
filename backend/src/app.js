import express from "express"
import cookieParser from "cookie-parser"
import healthRoute from "./models/health/health.routes.js"
import authRoutes from "./models/auth/auth.routes.js"
import { authMiddleware } from "./middleware/auth.middleware.js"
import taskRoute from "../src/models/task/task.routes.js"




const app = express()
app.use(express.json())
app.use(cookieParser());



app.use("/api/health", healthRoute )
app.use("/api/auth",authRoutes)
app.use("/api/task",taskRoute)
app.get("/api/protected",authMiddleware,(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Welcome! You are authenticated.",
        user:req.user
    })
})



export default app