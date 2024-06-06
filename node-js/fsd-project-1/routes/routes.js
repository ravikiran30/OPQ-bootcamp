const express = require('express')
const router = express.Router()


router.get("/" , function(req,res){
    console.log("This is my first API");
    res.send("This is first API-1 request implemented")
})

router.get("/userinfo" , function(req,res){
    console.log(req.query)
    console.log(req.query["user_id"])
    console.log("This is my first user info API");
    res.json({
        "message":"This is first user info request implemented"}
    )
})

router.post("/userinfo" , function(req,res){
    console.log(req.body)
    res.json({
        "message":"This is first post user info request implemented"}
    )
})

router.put("/userinfo" , function(req,res){
    res.json({
        "message":"This is first put user info request implemented"}
    )
})

router.delete("/userinfo" , function(req,res){
    res.json({
        "message":"This is first delete user info request implemented"}
    )
})




module.exports=router;