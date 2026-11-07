import Redis from "ioredis"

const redis = new Redis({
    host:process.env.HOST,
    port:Number(process.env.REDIS_POST),
    password:process.env.PASSWORD
})

redis.on("connect",()=>{
    console.log("Redis connected successfully")
})

redis.on("error",(error)=>{
    console.error("Redis connection error:",error);
    
})

export default redis