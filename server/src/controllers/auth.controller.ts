import { type Request, type Response } from 'express'
import { type UserInterface } from '../types/user.types.ts';
import { CreateUser } from "../services/auth.service.ts";

export async function createUser ( req: Request, res: Response ) : Promise<void>{ 
    const { userName, password } = req.body

    try{
        const user: UserInterface = { userName, password};
        await CreateUser(user)
    }catch(error){
        console.log(error)
    }

}