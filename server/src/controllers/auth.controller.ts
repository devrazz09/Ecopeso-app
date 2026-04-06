import { type Request, type Response } from 'express'
import bcrypt from 'bcrypt'
import { type UserInterface } from '../types/user.types.ts';
import { CreateUser } from "../services/auth.service.ts";

export async function createUser ( req: Request, res: Response ) : Promise<void>{ 

    const { userName, password } = req.body;
    const saltRounds = 10

    try{

        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const user: UserInterface = { userName, hashedPassword};
        await CreateUser(user)

    }catch(error){
        console.log(error)
    }

}