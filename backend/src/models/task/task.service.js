import taskModel from "./task.model.js";


export const createTask = async (taskData, userId) => {
    const { title, description, priority, dueDate,status } = taskData

    const task = await taskModel.create({
        title,
        description,
        priority,
        dueDate,
        status,
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

export const getSingleTask = async (taskId,userId)=>{
    const task = await taskModel.findOne({
        _id: taskId,
        user: userId
    })

    return task
}


export const updateTask = async (taskId,userId,updateData)=>{
    const task = await taskModel.findOneAndUpdate(
        {
            _id:taskId,
            user:userId
        },
        updateData,
        {
            new:true,
            runValidators:true
        }
    );

    return task
}

export const updateTaskStatus = async(taskId,userId,status)=>{
    const task = await taskModel.findOneAndUpdate(
        {
            _id:taskId,
            user:userId
        },
        {
            status:status
        },
        {  new: true,
        runValidators: true
        }
    )

    return task
}

export const deleteTask = async (taskId,userId)=>{
    const task = await taskModel.findOneAndDelete({
        _id:taskId,
        user:userId
    })

    return task
}


export const filterTask = async(userId,status)=>{
    const task = await taskModel.find({
        user:userId,
        status:status
    });
    return task
}

export const searchTask = async(userId,search)=>{
    const task = await taskModel.find({
        user:userId,
        title:{
            $regex:search,
            $options:"i"
        }
    });
    return task
}

export const getTaskStatus = async(userId)=>{

    const totalTask = await taskModel.countDocuments({
        user:userId
    })

    const completedTask = await taskModel.countDocuments({
        user:userId,
        status:"completed"
    })

    const inProgressTasks = await taskModel.countDocuments({
        user:userId,
        status:"in-progress"
    })

    const todoTasks = await taskModel.countDocuments({
        user:userId,
        status:"todo"
    })


    return{
        totalTask,
        completedTask,
        inProgressTasks,
        todoTasks
    }
}