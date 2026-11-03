import express from "express";
import { checkHealth } from "./health.controller.js";

const route = express.Router()

route.get("/",checkHealth)

export default route
