const express = require("express")
const app = express()
const dotenv = require('dotenv').config()
const routes = require("./routes/routes")

app.use(express.json())

port = process.env.PORT

app.use("/api", routes )



app.get("/api1", function(req, res){
    console.log("First get Request");
    res.send("Hello API1");
})

app.get("/api2", function(req, res){
    console.log("First get Request");
    res.statusCode = 400;
    res.set({
        "Content-Type":"application/json",
        "Kabali":"Rajinikanth"
    })
    res.send({"message":"Welcome to API implementation"});
})

app.get("/api3", function(req, res){
    console.log("First get Request");
    res.json({"message":"Welcome to API implementation"});
})

app.listen(port, function(err){
    if(err){
        console.log("there is an error in starting the server")
    }
    console.log("Server is running at port "+ port)
})