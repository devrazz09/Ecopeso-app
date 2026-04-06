import { type Request, type Response } from 'express'
import bcrypt from 'bcrypt'
import { type UserInterface } from '../types/user.types.ts';
import { CreateUser, UserLoginService } from "../services/auth.service.ts";

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

export async function loginUser( req: Request, res: Response ){
    const { userName, password } = req.body
   
    try {
        
        const users = await UserLoginService({ userName });

        if(!users || users.length === 0) {
            return res.status(404).json({ messae: "Invalid Credentials"});
        }

        const user = users[0];
        const isMatch = await bcrypt.compare(password, user?.user_password!)

        if(!isMatch){
            return res.status(404).json({message: "invalid Credentials"});
        }

        return res.json({
            message: "Login Successfully",
            user: { id: user?.user_id, name: user?.user_name}
        })

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error" });

    }
}