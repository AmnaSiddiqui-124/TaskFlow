import bcrypt from "bcryptjs"
import userModel from "../user/user.model.js"
import jwt from "jsonwebtoken"  


export const registerUser = async (userData) => {
    const { username, email, password } = userData;

    const existingUser = await userModel.findOne({email});

    if(existingUser){
        throw new Error("Email already registered...")
    }

    const hashPassword = await bcrypt.hash(password,10)

    const user = await userModel.create({
        username,
        email,
        password:hashPassword
    });

    return{
        id:user._id,
        username:user.username,
        email:user.email
    }


}

const generateToken = (user)=>{
    return jwt.sign(
        {id: user._id},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )
}


export const loginUser = async (email,password)=>{
    const user = await userModel.findOne({email}).select("+password")

    if(!user){
        throw new Error("Invalid credentials")
    }


    const isPasswordcorrect = await bcrypt.compare(
        password,
        user.password
    )

    if(!isPasswordcorrect){
        throw new Error("Invalid credentials")
    }


    const token = generateToken(user)


    return{
        id:user._id,
        username:user.username,
        email:user.email,
        token
    }
}