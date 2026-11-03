import bcrypt from "bcryptjs"
import userModel from "../user/user.model.js"


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