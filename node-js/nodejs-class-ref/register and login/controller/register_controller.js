const express = require("express")
// const router = express.Router()
const connection =require("../mysql/mysql.js")
const error_handler = require("./error_controller.js")

const register = function(req, res){
    const email = req.body.email


    // check all parameters exists
    // Check for syntax for all parameters

    const user_exists_query = "select * from users where email=?"
    connection.query(user_exists_query,[email], function(err, results){
        if(err){
            error_handler(err, req, res, 400)
        }
        if(results.length>0){
            console.log(results)
            error_handler("User already exists. Go and Login", req, res, 400)
        }else{
            //Passwod hashing should be done 
            // const hash_password = hashed_password
            const register_query = "INSERT INTO users SET email=?, password=?, first_name=?, last_name=?, phone_number=?"
            const user_details = req.body
            connection.query(register_query,[user_details.email, user_details.password, user_details.first_name, user_details.last_name, user_details.phone_number], function(err1, results1){
                if(err1){
                    error_handler(err1, req,res, 400)
                }else{
                    res.set({
                        "Content-Type": "application/json"
                    })
                    res.statusCode = 201
                    response_body = {
                        "message": "User is created. Login and enjoy"
                    }
                    res.send(response_body)
                }
            })
        }
    })
}

module.exports = register