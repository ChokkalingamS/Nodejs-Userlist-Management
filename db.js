import {client} from './index.js'

async function getManyUser()
{
    return await client.db('movielist').collection('userlist').find().toArray()
}
async function getUser(userdata)
{
    return await client.db('movielist').collection('userlist').findOne(userdata)
}
async function createUser(userdata)
{
    return await client.db('movielist').collection('userlist').insertOne(userdata)
}
async function updateUser(userdata)
{
    const {Name,Avatar,Mail,Mobile,Status,_id}=userdata
    return await client.db('movielist').collection('userlist').updateOne({_id},{$set:{Name,Avatar,Mail,Mobile,Status:'Active'}})
}
async function deleteUser(userdata)
{
    return await client.db('movielist').collection('userlist').deleteOne(userdata)
}


export {getManyUser,getUser,createUser,updateUser,deleteUser}