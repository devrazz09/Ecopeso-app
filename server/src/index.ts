import express from "express"
import 'dotenv/config'
import { db } from "./configs/db.config.ts"
const app = express()



const PORT = process.env.PORT


app.listen( PORT, () => {
    try{
        console.log("server running")
        db();
    }catch(error){
        console.error(error)
    }
})
