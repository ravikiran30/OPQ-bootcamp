
const express = require('express')
const router = express.Router()
const connection =require('../mysql/mysql.js')
const error_handler =require('../controller/error_controller.js')

const task = function(req, res){
    // const email =req.body.email
    const task_topic=req.body.task_topic
    const task_details=req.body.task_details
    const status_of_task=req.body.status_of_task

    var jwt_details=res.locals;
    console.log(jwt_details)

    const verify_email = "select * from users where email=?"
   
    connection.query(verify_email,[jwt_details.email],function(err,result){
        if(err){
            
            error_handler("Enter vaild email-id" ,req ,res ,400)
            
        }
        if(result.length>0){
            const task_query=' select * from tasks where task_topic=? and email=? '
            connection.query(task_query,[task_topic,jwt_details.email],function(err1,res1){
                if(err1){
                    
                    error_handler("Error in adding Task",req,res,400)

                }else{
                    if(res1.length>0){
                        
                        error_handler("Task is already exits in the database you can update the status",req,res,400)
                    }else{
                        
                        const add_task_query='insert into tasks set email=? , task_topic=? , task_details=? ,status_of_task=?'
                        connection.query(add_task_query,[jwt_details.email,task_topic,task_details,status_of_task],function(err2,res2){
                            if(err2){
                                error_handler("Error in adding task",req,res,400)

                            }else{
                                console.log(res2)
                                res.json({message:"Task added successfully"})
                            }
                        })

                    }

                }

            })
        }else{
            error_handler("enter valid email",req,res,404)
        }

    })


}

module.exports = task