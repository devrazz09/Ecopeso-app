import mysql from "mysql2/promise"

export async function db(){
    try{
        const dbconnection = await mysql.createConnection({  
            host: process.env.DB_HOST!,
            user: process.env.DB_USER!,
            password: process.env.DB_PASSWORD!,
            database: process.env.DB!,
            port: Number(process.env.DB_PORT!),
        })

        if(!dbconnection){
            console.error({message: "Failed to connected", status: 500})
        }

        console.log("database connected")

    }catch(error){
        console.log(error)
    }
}