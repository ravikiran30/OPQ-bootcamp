const express = require('express')
// const router = express.Router()
const connection =require('../mysql/mysql.js')
const error_handler =require('../controller/error_controller.js')
// const validator = require('../controller/validates.js')
const bcrypt=require('bcrypt')




const register = function(req ,res ){
    const email =req.body.email
    const user_password = req.body.user_password
    // const verify = validator.validate(req.body)
    const user_exists_query = "select * from users where email=?"
    connection.query(user_exists_query,[email],async function(err , results){
        if(err){
            error_handler(err ,req ,res ,400)
        }
        if(results.length>0){
            console.log(results)
            error_handler("Users is already exits.Go and Login",req,res,400)
        } else{
                const salt =await bcrypt.genSalt(10)
                const hashed_password =await bcrypt.hash(user_password,salt)
                const register_query = "INSERT INTO users SET user_name=? , email=? , phone_number=? , user_password=?"
                const user_details =req.body
                connection.query(register_query,[user_details.user_name,user_details.email,user_details.phone_number,hashed_password],function(err1,reults1){
                        if(err1){
                            error_handler(err1,req,res,400)
                        }else{
                            res.set({
                                "content-Type":"application/json"
                            })
                            res.statusCode=201
                            response_body={
                                "message":"User is created. login and enjoy"
                            }
                            res.send(response_body)
                        }
                })
            }
            
        
        })
    }
    


module.exports =register 
