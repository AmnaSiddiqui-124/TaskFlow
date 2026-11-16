import "dotenv/config"
// import dns from "node:dns";
// dns.setServers(["8.8.8.8", "1.1.1.1"]);
import app from "./src/app.js"
import connectDB from "./src/config/DB.js"
import redis from "./src/config/redis.js"

const PORT = process.env.PORT || 3000

const startServer = async()=>{
    try {
        await connectDB()
        await redis.ping()
        app.listen(PORT,()=>{
            console.log(`TaskFlow server running on port ${PORT}`)
        });
    } catch (error) {
        console.error("Server startup failed:",error.message)
        process.exit(1)
    }
}

startServer()