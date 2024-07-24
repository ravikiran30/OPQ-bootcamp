const { response } = require('express')
var jwt = require('jsonwebtoken')
const dotenv=require('dotenv').config()

var jwt_verify=function(req,res,next){
    const jwt_token=req.header('authorization')
    //if token not present
    if(!jwt_token){
        res.statusCode=401
        const response = {
            "message":"Send the Token"
        }
        res.set({
            "Content-Type":"application/json"
        })
        res.send(response)

    }else{

        //if token is present
        //verify jwt token
        jwt.verify(jwt_token,process.env.JWT_SECRET_KEY,function(err,jwt_decoded){
            if(err){
               if(err.name =="TokenExpriredError"){
                res.statusCode=401
                const response = {
                    "message":"Token is exprired"
                }
                res.set({
                    "Content-Type":"application/json"
                })
                res.send(response)
               }else{
                res.statusCode=401
                const response = {
                    "message":"Token is invalid"
                }
                res.set({
                    "Content-Type":"application/json"
                })
                res.send(response)
               }
                
            }else{
                res.locals=jwt_decoded
                next()
            }
        })
    }
}


module.exports=jwt_verify