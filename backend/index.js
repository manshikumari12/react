const express = require("express")
const {connection} = require("./db")
console.log(connection)
const app= express()
const env= require("dotenv")
env.config()
const cors = require('cors');
app.use(express.json())


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("your database is connected")

    } catch (error) {
        console.log(error)
        
    }
    console.log(`your server is connected on${process.env.port}` )
})