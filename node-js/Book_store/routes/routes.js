const express = require('express')
const router = express.Router()
const connection =require('../mysql/mysql.js')

const error_handler =require('../controller/error_controller.js')
const register = require('../controller/register.js')
const login = require('../controller/login.js')
const add_books = require('../controller/add_book.js')
const list_books=require('../controller/list_books.js')
const list_book_id=require('../controller/list_book_id.js')
const delete_book=require("../controller/delete_book.js")
const update_book=require('../controller/update_status.js')

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

router.post("/register" , register)
router.post("/login" , login)
router.post("/add_book",add_books)
router.get ("/list_book",list_books)
router.get("/list_book_id",list_book_id)
router.delete("/delete",delete_book)
router.put("/update",update_book)


module.exports =router