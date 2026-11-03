import express from "express"

import healthRoute from "./models/health/health.routes.js"
import authRoutes from "./models/auth/auth.routes.js"




const app = express()
app.use(express.json())



app.use("/api/health", healthRoute )
app.use("/api/auth",authRoutes)


export default app