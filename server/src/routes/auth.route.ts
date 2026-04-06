import { Router } from "express";
import { createUser } from "../controllers/auth.controller.ts";

const route = Router()


route.post('/register', createUser)

export default route;