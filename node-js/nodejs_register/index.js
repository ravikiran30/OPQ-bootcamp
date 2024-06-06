console.log("This is main file")

const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const router =require('./routes/routes')

const port = process.env.PORT
// console.log("Host address :"  +process.env.HOST_ADDRESS)


app.use(express.json())

app.use('/api',router)





// app.get("/api" , function(req,res){
//     console.log("This is my first API");
//     res.send("This is first API-1 request implemented")
// })

// app.get("/api1" , function(req,res){
//     console.log("This is my first json data");
//     res.json({
//         "message":"This is first json data"
//     })
// })

// app.get("/api2" , function(req,res){
//     res.statusCode=200
//     res.set({
//         "content-type":"application/json"
//     })
//     res.send({
//         "message":"this is an api request"
//     })
    
// })


app.listen(port,function(err){
    if(err){
        console.log("there is an error in starting the server")
    }
    console.log("server is running at port number : " +port)
})