import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true
        },
        password: {
            type: String,
            required: true,
            select: false
        },
         profileImage: {
            type: String,
            default: ""
        },

        bio: {
            type: String,
            default: ""
        }
    },{
        timestamps:true
    }
)

const user = mongoose.model("User",userSchema)

export default user;
