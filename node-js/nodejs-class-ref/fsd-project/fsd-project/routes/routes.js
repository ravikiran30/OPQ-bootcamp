const express = require("express")
const router = express.Router()

router.get("/", function(req,res){
    console.log("This is my first API")
    res.send("This is my first API request implemented")
})


router.get("/userinfo/:id/:username", function(req,res){
    console.log(req.params)
    console.log("This is my first API")
    res.json({
        "message":"This is my first Userinfo request implemented"
    })
})

router.get("/userinfo", function(req,res){
    console.log(req.query)
    console.log("This is my first API")
    res.json({
        "message":"This is my first Userinfo request implemented"
    })
})

router.post("/userinfo", function(req,res){
    console.log(req.body)
    res.json({
        "message":"This is my first POST Userinfo request implemented"
    })
})

router.put("/userinfo", function(req,res){
    res.json({
        "message":"This is my first PUT Userinfo request implemented"
    })
})

router.delete("/userinfo", function(req,res){
    res.json({
        "message":"This is my first delete Userinfo request implemented"
    })
})




module.exports = router;
