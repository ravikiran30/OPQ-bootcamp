const express = require('express')
const router = express.Router()
const connection =require('../mysql/mysql.js')
const error_handler =require('../controller/error_controller.js')
const register = require('../controller/register.js')
const login = require('../controller/login.js')
const task = require('../controller/add_task.js')
const list_task=require("../controller/list_task.js")
const list_task_id=require("../controller/list_task_id.js")
const delete_task=require("../controller/delete_task.js")
const update_task=require("../controller/update_task.js")


const jwt_verify=require("../controller/jwt_verify.js")

router.get("/" , jwt_verify,function(req,res){
    jwt_decoded = res.locals
    console.log(jwt_decoded)
    const user_query ="select * from users where user_id=?"
    connection.query(user_query,[user_id],function(error, results){
        if(error){
            // res.statusCode=400
            // res.send("There is an error 1")
            error_handler(error,req,res,400)
        }else{
            if(results.length){
                const response_body = results
                res.set({"Content_type":"application/json"})
                res.statusCode = 200
                res.send(response_body)
            }else{
                res.send({"message":"No User"})
            }
        }
    })
    // res.send("This is first API-2 request implemented")
})

router.post("/register" , register)
router.post("/login" , login)
router.post("/add_task",jwt_verify,task)
router.get("/list_task",jwt_verify,list_task)
router.get("/list_task_id",jwt_verify,list_task_id)
router.delete("/delete",jwt_verify,delete_task)
router.put("/update",jwt_verify,update_task)


module.exports =router