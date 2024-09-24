const { request } = require("express")
const jwt = require("jsonwebtoken")

const auth = async (req,res,next)=>{
    const token = request.headers.authorization
    if(!token){
       return res.status(400).send({msg : "token is missing"})
    }sg

    try {
       jwt.verify(token,"noteapp",(err,decode)=>{
          if(err){
            return  res.status(400).send({msg:"Token Inavaliid"})
          }

          res.user = {

            userid : decode.userid,
            name : decode.name,
            email : decode.email

          }
          
          next()
       }) 


       
    } catch (error) {
        res.status(500).send({msg:"Internal server error", error : error.msg})
    }
}
module.exports = {auth}