import { dbconnection } from "../configs/db.config.ts";
import {type UserInterface } from "../types/user.types.ts";

export async function CreateUser({ userName, password } : UserInterface) : Promise<void> {

    const sql = `INSERT INTO users (user_name, user_password) VALUES ( ?, ?)`

    try{

        const createUser = await dbconnection.query(sql, [userName, password]);

        if(!createUser) console.log("Query failed");
        console.log("User Created!")

    }catch(error){
        console.log(error)
    }

    

}