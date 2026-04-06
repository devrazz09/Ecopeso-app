import { Router } from "express";
import { createUser, loginUser } from "../controllers/auth.controller.ts";

const route = Router()


route.post('/register', createUser);
route.post('/login', loginUser);

export default route;