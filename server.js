import express from 'express'
import dotenv from 'dotenv'
import Connection from './config/db.Connection.js'
import Routes from './Routes/user.Routes.js'
import cors from 'cors'
const app = express()
dotenv.config()


app.use(express.json())
app.use(cors())
app.use( '/',Routes)

Connection()



app.listen(process.env.PORT, ()=>{
    console.log(`server is listing on ${process.env.PORT}`)
})