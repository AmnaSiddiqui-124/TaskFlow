import { createTask, getAllTask, getSingleTask, updateTask, deleteTask, updateTaskStatus, filterTask, searchTask } from "./task.service.js";
import mongoose from "mongoose";

export const createTaskController = async (req, res) => {
    try {
        const userId = req.user.id;

        const task = await createTask(req.body, userId)

        return res.status(201).json({
            success: true,
            message: "Task created successfully",
            task
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getAllTaskController = async (req, res) => {
    try {
        const userId = req.user.id;

        const task = await getAllTask(userId)

        return res.status(200).json({
            success: true,
            message: "Tasks fetched successfully",
            task
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }



}

export const getSingleTaskController = async (req, res) => {
    try {
        const { taskId } = req.params

        if (!mongoose.Types.ObjectId.isValid(taskId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid Task ID"
            });
        }

        const userId = req.user.id
        console.log("Task ID:", taskId);
        console.log("User ID:", userId);

        const task = await getSingleTask(taskId, userId)


        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Task fetched successfully",
            task
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const updateTaskController = async (req, res) => {
    try {
        const { taskId } = req.params
         if (!mongoose.Types.ObjectId.isValid(taskId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid Task ID"
            });
        }
        const userId = req.user.id
        const updateData = req.body

        const task = await updateTask(taskId, userId, updateData)

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Task updated successfully",
            task
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


export const deleteTaskController = async (req, res) => {
    try {
        const { taskId } = req.params
         if (!mongoose.Types.ObjectId.isValid(taskId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid Task ID"
            });
        }
        const userId = req.user.id

        const task = await deleteTask(taskId, userId)

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Task deleted successfully",
            task
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


export const updateTaskStatusController = async (req, res) => {
    try {
        const { taskId } = req.params
         if (!mongoose.Types.ObjectId.isValid(taskId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid Task ID"
            });
        }
        const userId = req.user.Id
        const { status } = req.body

        const task = await updateTaskStatus(taskId, userId, status)

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Task status updated successfully",
            task
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const filterTaskController = async (req, res) => {
    try {
        const userId = req.user.id
        const { status } = req.query

        if(!status || !["todo","in-progress","completed"].includes(status)){
            return res.status(400).json({
        success: false,
        message: "Please provide a valid task status"
    });
        }

        const task = await filterTask(userId, status)

        return res.status(200).json({
            success: true,
            message: "Tasks filtered successfully",
            task
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const searchTaskController = async (req, res) => {
    try {
        const userId = req.user.id
        const { search } = req.query

        if(!search || !search.trim()){
            return res.status(400).json({
        success: false,
        message: "Search keyword is required"
    });
        }

        const task = await searchTask(userId, search)

        return res.status(200).json({
            success: true,
            message: "Tasks searched successfully",
            task
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}