import express from 'express'
import {getManyUser,getUser,createUser,updateUser,deleteUser} from './db.js'
import {ObjectId} from 'mongodb'



const router=express.Router()



router.route('/userlist')
.post(async(request,response)=>
{
    const {Name,Avatar,Mail,Mobile,Status}=request.body
    const check = await getUser({Mail})
    if(check)
    {
        return response.status(400).send({Msg:'Email Already exists'})
    }
    const create=await createUser({Name,Avatar,Mail,Mobile,Status})
    
    response.send(create)

})

router.route('/userlist')
.get(async(request,response)=>{
    const data= await getManyUser()
    if(!data)
    {
        return response.status(404).send('Not Found')
    }
    return response.send(data)
})

router.route('/userlist/:id')
.get(async(request,response)=>{
    const {id}=request.params
    const data= await getUser({_id:ObjectId(id)})
    if(!data)
    {
        return response.status(404).send('Not Found')
    }
    return response.send(data)
})

router.route('/userlist/:id')
.put(async(request,response)=>{
    const {id}=request.params
    const {Name,Avatar,Mail,Mobile,Status}=request.body
    const data= await getUser({_id:ObjectId(id)})
    if(!data)
    {
        return response.status(404).send('Not Found')
    }
    const updateData=updateUser({Name,Avatar,Mail,Mobile,Status,_id:ObjectId(id)})
    const result=await getUser({_id:ObjectId(id)})
    return response.send(result)
})

router.route('/userlist/:id')
.delete(async(request,response)=>{
    const {id}=request.params
    
    const data= await getUser({_id:ObjectId(id)})
    if(!data)
    {
        return response.status(404).send('Not Found')
    }
    const del=await deleteUser({_id:ObjectId(id)})
    const {deletedCount}=await del;
    if(!deletedCount)
    {
        return response.status(400).send('Error Occurred')
    }

    return response.send({Msg:'Deleted'})
})


export const userRouter=router

