const express = require("express")
// const router = express.Router()
const connection =require("../mysql/mysql.js")
const error_handler = require("./error_controller.js")

const login = function(req, res){
    const email = req.body.email
    const password = req.body.password
    //email and password exists
    //format of email and password is correct
    //Hash the password - use the same hashing mechanism used in register API
    const user_query = "select * from users where email=? and password =?"
    connection.query(user_query,[email, password], function(err, results){
        if(err){
            error_handler(err, req, res, 400)
        }
        if(results.length>0){
            console.log(results)
            res.statusCode = 200
            res.set({
                "content-type":"application/json"
            })
            //ccreate a session value or a JWT
            response = {
                "message" : "Login is successful. Enjoy"
            }
            res.send(response)
        }else{
            error_handler("Email Address/Password is incorrect.", req, res, 400)
        }
    })
}

module.exports = login