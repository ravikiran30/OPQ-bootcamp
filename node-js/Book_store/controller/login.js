const express = require('express')
const connection =require('../mysql/mysql.js')
const error_handler =require('../controller/error_controller.js')


const login = function(req,res){
    const email=req.body.email
    const user_password=req.body.user_password
    const user_exists_query = "select * from users where email=? and user_password=?"
    connection.query(user_exists_query,[email,user_password],function(err,results){
        if(err){
            error_handler.error_handler(res,err)
        }else{
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
        }
    })



}


module.exports=login
