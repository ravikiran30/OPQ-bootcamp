const express = require('express')
const router = express.Router()
const connection =require('../mysql/mysql.js')
const error_handler =require('../controller/error_controller.js')

const delete_task = function(req,res){
    var jwt_details=res.locals
    let task_id=req.body.task_id
    let del_query="select * from tasks where email=? and task_id=?"
    
    connection.query(del_query,[jwt_details.email,task_id],function(err,result){
        
        if(err){
            
            error_handler(err,req,res,400)    
        }
        if(result.length>0){
            
            let delete_task_query="delete from tasks where email=? and task_id=?"
           
            connection.query(delete_task_query,[jwt_details.email,task_id],function(err1,res1){
                if(res1.length>0){
                    res.send(res.json({"message":"task not found"}))
                   
                }else{
                   res.send(res.json({"message":"task  found and deleted...."}))
                }
            })
        }else{
            error_handler("enter task id correctly to delete",req,res,400)
        }
    })

}
module.exports=delete_task