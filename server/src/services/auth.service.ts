import { dbconnection } from "../configs/db.config.ts";
import {type UserInterface } from "../types/user.types.ts";

export async function CreateUser({ userName, hashedPassword } : UserInterface) : Promise<void> {

    const sql = `INSERT INTO users (user_name, user_password) VALUES ( ?, ?)`

    try{

        const createUser = await dbconnection.query(sql, [userName, hashedPassword]);

        if(!createUser) console.log("Query failed");
        console.log("User Created!")

    }catch(error){
        console.log(error)
    }
}

export async function UserLoginService({ userName }: UserInterface){
    const slq = `SELECT user_id, user_name, user_password FROM users WHERE user_name = ?`
    try {

        const [rows] = await dbconnection.query(slq, [userName]);

        if(!rows) console.log("Wrong Credentials!");

        return rows as Array<{ user_id: number; user_name: string; user_password: string }>

    } catch (error) {
        console.error("Database error:", error);
        throw error;

    }
}