import taskModel from "./task.model.js";


export const createTask = async (taskData, userId) => {
    const { title, description, priority, dueDate } = taskData

    const task = await taskModel.create({
        title,
        description,
        priority,
        dueDate,
        user:userId

        
    })

    return task
}

export const getAllTask = async(userId)=>{
    const tasks = await taskModel.find({
        user:userId
    })

    return tasks
}