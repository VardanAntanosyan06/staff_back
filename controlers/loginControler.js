const loginModel = require("../models").Users;
const bcrypt = require("bcrypt");


const login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const condidat = await loginModel.findOne({where:{email}});
        if(condidat && (await bcrypt.compareSync(password, condidat.password))){
            return res.json({success:true, condidat})
        }else{
            return res.json("invalid email or password")    
        }  
    } catch (error) {
        res.json("something went wrong",error)
    }
}


module.exports = {
    login,
}


 