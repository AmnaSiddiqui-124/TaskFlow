import express from "express"
import { register,login,logout } from "./auth.controller.js"
import {validateRegister} from "./auth.validation.js"

const route = express.Router()

route.post("/register",validateRegister,register)
route.post("/login", login)
route.post("/logout", logout);


export default route