import express from "express"
import { register } from "./auth.controller.js"
import {validateRegister} from "./auth.validation.js"

const route = express.Router()

route.post("/register",validateRegister,register)


export default route