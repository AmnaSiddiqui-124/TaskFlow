import jwt from "jsonwebtoken";
import redis from "../config/redis.js";

export const authMiddleware = async (req, res, next) => {

    const token = req.cookies.token;
    const actualToken = token;


    if (!actualToken) {
        return res.status(401).json({
            success: false,
            message: "Access denied. No token provided"
        });
    }

    try {
  
        const isBlacklisted = await redis.get(actualToken);

        if (isBlacklisted) {
            return res.status(401).json({
                success: false,
                message: "You are logged out. Please login again."
            });
        }

   
        const decoded = jwt.verify(
            actualToken,
            process.env.JWT_SECRET
        );

     
        req.user = decoded;

       
        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};