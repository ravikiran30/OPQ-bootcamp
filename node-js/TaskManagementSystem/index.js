console.log("This is Main Page");

const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const router = require('./routes/routes')

const port = process.env.port

app.use(express.json())
app.use('/api',router)

app.listen(port,function(err) {
    if(err){
        console.log("There is an error")
    }else{
        console.log("Server is running at port :" + port)
    }
    
});