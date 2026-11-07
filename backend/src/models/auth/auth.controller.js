import { registerUser, loginUser } from "./auth.service.js";
import redis from "../../config/redis.js";


export const register = async (req, res) => {
    try {
        const user = await registerUser(req.body)

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


export const login = async (req, res) => {
    try {

        const { email, password } = req.body

        const user = await loginUser(email, password)

        const { token, ...safeUser } = user;


        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        });


        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user: safeUser
        });


    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}



export const logout = async (req, res) => {
    try {

        const token = req.cookies.token

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "No token provided"
            })
        }

        await redis.set(token, "blacklisted", "EX", 86400)

        res.clearCookie("token", {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        })


        return res.status(200).json({
            success: true,
            message: "User logged out successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }

}