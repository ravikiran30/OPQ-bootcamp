const express = require('express')
const router = express.Router()
const connection =require('../mysql/mysql.js')
const error_handler =require('../controller/error_controller.js')

const list_task_id = function(req, res){
    var jwt_details=res.locals
    let task_id=req.body.task_id
    let id_query = "select * from tasks where email=? and task_id=?"
    connection.query(id_query, [jwt_details.email,task_id], function(err, result){
        if(err){
            error_handler(err,req,res,400)
        }
        if(result.length>0){
            tasks=res.json(result)
            res.send(tasks)
        }else{
            error_handler("Enter correct task id",req,res,400)
        }
    })
    
}
module.exports=list_task_id