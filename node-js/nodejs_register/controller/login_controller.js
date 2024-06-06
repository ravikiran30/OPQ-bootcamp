
const express = require('express')
// const router = express.Router()
const connection =require('../mysql/mysql.js')
const error_handler =require('../controller/error_controller.js')




const login = function(req ,res ){
    const email =req.body.email
    const pass = req.body.pass

    const user_query = "select * from users where email=? and pass=?"
    connection.query(user_query,[email,pass],function(err , results){
        if(err){
            error_handler(err ,req ,res ,400)
        }
        if(results.length>0){
            console.log(results)
            res.statusCode = 200
            res.set({"content-type":"application/json"})
            express.response={
                "message":"Login is Successful.Enjoy"
            }
            res.send(express.response)
            
        }else{
            error_handler("Email address/password is incorrect",req,res,400)
           
        }
    })
    
}

module.exports = login
