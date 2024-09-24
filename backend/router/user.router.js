const express = require("express")
const {usermodel} =require("../model/model.user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
userrouter = express.Router()


    userrouter.pos("/signup",async(req,res)=>{
        try {
            const {name,email,password}= req.body
            const user = await usermodel.findOne(email)
            if(!user){
               bcrypt.hash(password,5,async(err,hash)=>{
               const newUser = new usermodel({name,email,password:hash})
               await newUser.save()
               res.status(200).send({msg:"registration sucessfull!!!"})

            })
            }else{
              res.status(400).send({msg:"failed to register!!!"})
            }
        } catch (error) {
            return res.status(400).send({msg: "something went wrong",error: error.msg})
        }
    })

userrouter("/login",async(req,res)=>{
    try {
        const {email,password}= req.body

        const user = await usermodel.findOne({email})
        if(!user){
            return res.status(201).send({msg:"invalid email,password"})
        }

        // Compare the password with the stored hashed password
        const ismatch = await bcrypt.compare(password,user.password)
        if(!ismatch){
            res.status(400).send({msg:"invalid email,password",error:msg.error})
        }

        //generate jwt token
        const token = jwt.sign(
            {id:user.id},
            "noteapp",
            {expirein :"1hr"}
        )


        res.status(200).send({msg:"Login sucessfull",token,})
    } catch (error) {
       return res.status(400).send({msg:"Something went wrong",error: error.msg})
    }
})
 module.exports= {userrouter}