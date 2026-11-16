import express from "express"
import { 

    createTaskController,
    getAllTaskController, 
    getSingleTaskController, 
    updateTaskController, 
    deleteTaskController, 
    updateTaskStatusController,
    filterTaskController,
    searchTaskController,
    getTaskStatusController

    } 
from "./task.controller.js"

import { authMiddleware } from "../../middleware/auth.middleware.js"

const route = express.Router()

route.post("/", authMiddleware, createTaskController)
route.get("/", authMiddleware, getAllTaskController)
route.get("/filter",authMiddleware,filterTaskController)
route.get("/search",authMiddleware,searchTaskController)
route.get("/status",authMiddleware,getTaskStatusController)
route.get("/:taskId", authMiddleware, getSingleTaskController)
route.patch("/:taskId", authMiddleware, updateTaskController)
route.delete("/:taskId", authMiddleware, deleteTaskController)
route.patch("/:taskId/status",authMiddleware,updateTaskStatusController)


export default route