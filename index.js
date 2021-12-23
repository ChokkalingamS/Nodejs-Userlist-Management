import express from 'express'
import {MongoClient} from 'mongodb'
import {userRouter} from './user.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const PORT=process.env.PORT
const MONGO_URL=process.env.MONGO_URL

const app=express()
app.use(cors())
app.use(express.json())
app.use('/',userRouter)

async function createConnection()
{
    const client =new MongoClient(MONGO_URL)
    await client.connect()
    console.log('MongoDB Connected');
    return client
}

export const client=await createConnection()



app.listen(PORT,()=>{
    console.log('Server Started:',PORT);
})


