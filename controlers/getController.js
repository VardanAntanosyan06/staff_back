const loginModel = require("../models").Users;
const tasksModel = require("../models").Tasks


const getAllUsers = async (req,res)=>{
    try {
        const users = await loginModel.findAll({
            include:[tasksModel],
            where:{role :"worker"}
        });
        return res.json(users)
    } catch (error) {
        return res.json(error)
    }
}

const getUser = async (req,res)=>{
    try {
        const id = req.query.id;
        console.log(id)
        const user = await loginModel.findOne({
            where:{id},
            include:[tasksModel]
        });
     return res.json(user)

    } catch (error) {
        return res.json(error)
    }
}


const getAdmins = async (req,res)=>{
    try {
        const admins = await loginModel.findAll({
            where:{role :"admin"}
        });
        return res.json(admins)
    } catch (error) {
        return res.json(error)
    }
}

const getTask = async(req,res)=>{
    try {
        const task = await tasksModel.findOne({where:{id:req.query.id}})

        return res.json(task)
    } catch (error) {
        return res.json(error)        
    }
}

module.exports = {
    getAllUsers,
    getUser,
    getAdmins,
    getTask,
}