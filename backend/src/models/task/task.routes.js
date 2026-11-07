import express from "express"
import { createTaskController,getAllTaskController } from "./task.controller.js"
import {authMiddleware} from "../../middleware/auth.middleware.js"

const route = express.Router()

route.post("/",authMiddleware,createTaskController)
route.get("/",authMiddleware,getAllTaskController)


export default route