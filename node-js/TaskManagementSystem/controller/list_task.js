

const express = require('express')
const router = express.Router()
const connection =require('../mysql/mysql.js')
const error_handler =require('../controller/error_controller.js')



const list_task = function(req, res){

    var jwt_details=res.locals;
    console.log(jwt_details)
    const list_query="select * from users where email=? "
    connection.query(list_query,[jwt_details.email],function(error, results){
        
        if(error){
            
           error_handler("Enter correct email",req,res,400)

        }if(results.length>0){
            const print_query="select * from tasks where email=?"
            connection.query(print_query,[jwt_details.email],function(error1,result1){
                if(error1){
                    error_handler(error1,req,res,400)
                }else{
                    print_list=res.json(result1)
                    res.send(print_list)
                }
            })
        }else{
            error_handler("Enter correct email",req,res,400)
        }

    })
}


module.exports =list_task