const express = require("express")
noterouter = express.Router()
const {notemoddel} = require("../model/model.note")

noterouter.post("/",async(req,res)=>{
    
})

module.exports= {noterouter}