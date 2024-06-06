const express = require('express')
const router = express.Router()
const connection =require('../mysql/mysql.js')
const error_handler =require('../controller/error_controller.js')
const register = require('../controller/register_controller.js')
const login =require('../controller/login_controller.js')

router.get("/" , function(req,res){
    const user_query ="select * from users"
    connection.query(user_query,function(error, results){
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


router.get("/userinfo" , function(req,res){
    const user_id =req.query.user_id
    const user_query ="select * from users where user_id=?"
    connection.query(user_query,[user_id],function(error, results){
        if(error){
            res.statusCode=400
            res.send("There is an error 1")
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

// router.get("/userinfo" , function(req,res){
//     console.log(req.query)
//     console.log(req.query["user_id"])
//     console.log("This is my first user info API");
//     res.json({
//         "message":"This is first user info request implemented"}
//     )
// })

// router.post("/userinfo" , function(req,res){
//     console.log(req.body)
//     res.json({
//         "message":"This is first post user info request implemented"}
//     )
// })

// router.put("/userinfo" , function(req,res){
//     res.json({
//         "message":"This is first put user info request implemented"}
//     )
// })

// router.delete("/userinfo" , function(req,res){
//     res.json({
//         "message":"This is first delete user info request implemented"}
//     )
// })




module.exports=router;