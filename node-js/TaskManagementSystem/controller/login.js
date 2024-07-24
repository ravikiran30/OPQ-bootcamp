
const express = require('express')
const router = express.Router()
const connection =require('../mysql/mysql.js')
const error_handler =require('../controller/error_controller.js')
const jwt = require("jsonwebtoken")
const bcrypt=require("bcrypt")




const login = function(req ,res ){
    const email =req.body.email
    const user_password = req.body.user_password

    //verify password
    const getHashPassword="select * from users where email=?"
    connection.query(getHashPassword,[email],function(err2,results){
        if(err2){
            error_handler(err2,req,res,400)
        }else{
            if(res.length==0){
                error_handler("Email not found",req,res,400)
            }else{
                const hash_password=results[0].user_password
                const isMatch=bcrypt.compareSync(user_password,hash_password)
               if(isMatch){
                console.log("HI")
                const payload ={
                                "email":results[0].email,
                                "user_id":results[0].user_id,
                                "phone_number":results[0].phone_number
                            }
                //create jwt sign
                const jwt_token = jwt.sign(payload ,process.env.JWT_SECRET_KEY,{expiresIn: '1h'})

                res.cookie("user_token",jwt_token,{
                    maxAge:3600,
                    httpOnly:true,
                    //secure:true
                    domain:"localhost",
                    sameSite:"lax"
                })
                express.response={
                    "message":"Login is Successful.Enjoy",
                    "user_token":jwt_token
                }
                res.send(express.response)

               }else{
                error_handler("Email address/password is incorrect",req,res,400)
               }
            }
        }
    })

    // const user_query = "select * from users where email=? and user_password=?"
    // connection.query(user_query,[email,user_password],function(err , results){
    //     if(err){
    //         error_handler(err ,req ,res ,400)
    //     }
    //     if(results.length>0){
    //         console.log(results[0])
    //         res.statusCode = 200
    //         res.set({"content-type":"application/json"})

    //         // create a session value or jwt token
    //         const payload ={
    //             "email":results[0].email,
    //             "user_id":results[0].user_id,
    //             "phone_number":results[0].phone_number
    //         }

            // //create jwt sign
            // const jwt_token = jwt.sign(payload ,process.env.JWT_SECRET_KEY,{expiresIn: '1h'})

            // res.cookie("user_token",jwt_token,{
            //     maxAge:3600,
            //     httpOnly:true,
            //     //secure:true
            //     domain:"localhost",
            //     sameSite:"lax"
            // })

            // express.response={
            //     "message":"Login is Successful.Enjoy",
            //     "user_token":jwt_token
            // }
            // res.send(express.response)
            
    //     }else{
            // error_handler("Email address/password is incorrect",req,res,400)
           
    //     }
    // })
    
}

module.exports = login
