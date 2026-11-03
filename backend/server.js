import "dotenv/config"
import app from "./src/app.js"
import connectDB from "./src/config/DB.js"

const PORT = process.env.PORT || 3000

const startServer = async()=>{
    try {
        await connectDB()
        app.listen(PORT,()=>{
            console.log(`TaskFlow server running on port ${PORT}`)
        });
    } catch (error) {
        console.error("Server startup failed:",error.message)
        process.exit(1)
    }
}

startServer()