const express = require("express")
const router = express.Router()
const connection =require("../mysql/mysql.js")
const error_handler = require("../controller/error_controller.js")

router.get("/", function(req,res){
    const user_query = "select * from users"
    connection.query(user_query, function(error, results){
        if(error){
            error_handler(error, req, res, 400)
        }else{
            if(results.length){
                const response_body = results
                res.set({"Content-Type":"application/json"})
                res.statusCode = 200
                res.send(response_body)
            }else{
                res.send({"message":"No Users"})
            }
        }
    })
    // res.send("This is my first API request implemented")
})

router.get("/userinfo", function(req,res){
    const user_id =req.query.user_id
    if(user_id){
        const user_query = "select * from users where user_id?"
        connection.query(user_query,[user_id] ,function(error, results){
            if(error){
                error_handler(error, req, res, 400)
            }else{
                if(results.length){
                    const response_body = results
                    res.set({"Content-Type":"application/json"})
                    res.statusCode = 200
                    res.send(response_body)
                }else{
                    res.send({"message":"No Users"})
                }
            }
        })

    }else{
        error_handler("User Id is missing", req, res, 400)
    }
   
    // res.send("This is my first API request implemented")
})

router.post("/register", function(req, res){

})

// router.get("/userinfo/:id/:username", function(req,res){
//     console.log(req.params)
//     console.log("This is my first API")
//     res.json({
//         "message":"This is my first Userinfo request implemented"
//     })
// })

// router.get("/userinfo", function(req,res){
//     console.log(req.query)
//     console.log("This is my first API")
//     res.json({
//         "message":"This is my first Userinfo request implemented"
//     })
// })

// router.post("/userinfo", function(req,res){
//     console.log(req.body)
//     res.json({
//         "message":"This is my first POST Userinfo request implemented"
//     })
// })

// router.put("/userinfo", function(req,res){
//     res.json({
//         "message":"This is my first PUT Userinfo request implemented"
//     })
// })

// router.delete("/userinfo", function(req,res){
//     res.json({
//         "message":"This is my first delete Userinfo request implemented"
//     })
// })


module.exports = router;
