import { createTask } from "./task.service.js";
import { getAllTask } from "./task.service.js";

export const createTaskController = async(req,res)=>{
    try {
        const userId = req.user.id;

        const task = await createTask(req.body,userId)

        return res.status(201).json({
            success:true,
            message:"Task created successfully",
            task
        })


    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const getAllTaskController = async (req,res)=>{
    try {
        const userId = req.user.id;

    const task = await getAllTask(userId)

    return res.status(200).json({
        success:true,
        message:"Tasks fetched successfully",
        task
    })
    } catch (error) {
       return res.status(500).json({
        success:false,
        message:error.message
       });
    }



}