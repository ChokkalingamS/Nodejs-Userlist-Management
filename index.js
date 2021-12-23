import express from 'express'
import {MongoClient} from 'Mongodb'
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


async function  create(data)
{
    return await client.db('movielist').collection('userlist').insertMany(data)
}

const data=[
    {
     "Name": "Judith Koss",
     "Avatar": "https://hindibate.com/wp/WhatsApp-DP-For-Girls-Of-Flower-1702.png",
     "Mobile": 7886123570,
     "Mail": "Koss@gmail.com",
     "Status": "Active"
    },
    {
     "Name": "Gladys Roob",
     "Avatar": "https://www.whatsappimages.in/wp-content/uploads/2021/05/Alone-Images.jpg",
     "Mobile": 8125489222,
     "Mail": "Roob@gmail.com",
     "Status": "Active"
    },
    {
     "Name": "Robert Becker",
     "Avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4N8121D5-fYcgpb47d6mSrWLz_aDtwenfg&usqp=CAU",
     "Mobile": 7752365888,
     "Mail": " Becker@gmail.com",
     "Status": "Active"
    },
    {
     "Name": "Steven Pollich",
     "Avatar": "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/07/amazing-whatsapp-dp-photo-hd-download.jpg",
     "Mobile": 8858585826,
     "Mail": "Pollich@gmail.com",
     "Status": "Active"
    },
    {
     "Name": "Bernice Wolf",
     "Avatar": "https://www.imagediamond.com/blog/wp-content/uploads/2019/07/hair-face-dp.jpg",
     "Mobile": 8841256521,
     "Mail": "Bernice@gmail.com",
     "Status": "Active"
    }
   ]
   create(data)


