const loginModel = require("../models").Users;
const tasksModel = require("../models").Tasks

const bcrypt = require("bcrypt");
const { where } = require("sequelize");
const salt = bcrypt.genSaltSync(10);


const addUser = async (req,res)=>{
    try {
        const {firstName,lastName,email,password,role} = req.body;
        const condidat = await loginModel.findOne({where:{email}});
        if(!condidat){
            const hash = bcrypt.hashSync(password, salt);
           let newItem = await loginModel.create({firstName,lastName,email,password:hash,role,task:null,deadline:null})
            return res.json({success:true,newItem})
        }else{
            return res.json("user alredy exist")
        }
    } catch (error) {
        return res.json("something went wrong",error)
    }
}

const removeUser = async (req,res)=>{
        try {
            const {email,password} = req.body;
            console.log(req.body);
            let item = await loginModel.findOne({where:{email}})

            if(item && (await bcrypt.compareSync(password, item.password))){
                item.destroy()
                return res.json({success:true})
            }else{
                return res.json("invalid email or password!")
            }

        } catch (error) {
            return res.json("something went wrong",error)
  
        }
}


const addTask = async (req,res)=>{
        try {
            const {userEmail,task,deadline} = req.body;
            const condidat = await loginModel.findOne({where:{email:userEmail}});
            if(condidat){
                let newTask = await tasksModel.create({userEmail,task,deadline})
                
                return res.json({success:true,newTask})
            }else{
                return res.json("can't find user with email"+"  "+userEmail)
            }
        } catch (error) {
            return res.json("something went wrong",error)
        }
}


const removeTask = async (req,res)=>{
    try {
        const {userEmail} = req.body;
        let item = await tasksModel.findOne({where:{userEmail}})

        if(item){
            item.destroy()
            return res.json({success:true})
        }else{
            return res.json("invalid email or password!")
        }

    } catch (error) {
        return res.json("something went wrong",error)

    }
}
module.exports = {
    addUser,
    removeUser,
    addTask,
    removeTask
}