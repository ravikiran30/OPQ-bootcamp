const express=require('express')
const connection=require('../mysql/mysql.js')
const error_handler=require('../controller/error_controller')



const update_task=function(req,res){
    
    var jwt_details=res.locals
    const task_id=req.body.task_id
    const status_of_task=req.body.status_of_task

    const search_query='select * from tasks where email=? and task_id=?'
    connection.query(search_query,[jwt_details.email,task_id],function(err,result){
        if(err){
            error_handler("Enter valid  task_id",req,res,400)
        }else{
            if(result.length>0){
            
                const update_query='update tasks set status_of_task=? where task_id=?'
                connection.query(update_query,[status_of_task,task_id],function(err1,res1){
                    if(err1){
                        error_handler("Error in updating task status",req,res,400)
                    }else{
                        res.json({message:"Updated task status..."})
                    }

                })


            }else{
                error_handler("Task not found",req,res,400)
            }

        }
    })

}

module.exports=update_task