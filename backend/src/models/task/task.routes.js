import express from "express"
import { 

    createTaskController,
    getAllTaskController, 
    getSingleTaskController, 
    updateTaskController, 
    deleteTaskController, 
    updateTaskStatusController,
    filterTaskController,
    searchTaskController

    } 
from "./task.controller.js"

import { authMiddleware } from "../../middleware/auth.middleware.js"

const route = express.Router()

route.post("/", authMiddleware, createTaskController)
route.get("/", authMiddleware, getAllTaskController)
route.get("/filter",authMiddleware,filterTaskController)
route.get("/search",authMiddleware,searchTaskController)
route.get("/:taskId", authMiddleware, getSingleTaskController)
route.patch("/:taskId", authMiddleware, updateTaskController)
route.delete("/:taskId", authMiddleware, deleteTaskController)
route.patch("/:taskId",authMiddleware,updateTaskStatusController)


export default route