import express from "express"
import 'dotenv/config'
import { dbconnection } from "./configs/db.config.ts"
import AuthRoute from './routes/auth.route.ts'
const app = express()
app.use(express.json());

const PORT = process.env.PORT

app.use('/auth', AuthRoute)

app.listen( PORT, () => {
    try{
        console.log("server running")
        dbconnection.connect();
    }catch(error){
        console.error(error)
    }
})
