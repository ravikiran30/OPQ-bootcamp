const express = require('express')
// const router = express.Router()
const connection =require('../mysql/mysql.js')
const error_handler =require('../controller/error_controller.js')

const delete_book = function(req,res){
    let email=req.body.email
    let book_id=req.body.book_id
    let del_query="select * from books where email=? and book_id=?"
    
    connection.query(del_query,[email,book_id],function(err,result){
        
        if(err){
            
            error_handler(err,req,res,400)    
        }
        if(result.length>0){
            
            let delete_book_query="delete from books where email=? and book_id=?"
           
            connection.query(delete_book_query,[email,book_id],function(err1,res1){
                if(res1.length>0){
                    res.send(res.json({"message":"Book not found"}))
                   
                }else{
                   res.send(res.json({"message":"Book  found and deleted...."}))
                }
            })
        }else{
            error_handler("enter email and book id correctly to delete",req,res,400)
        }
    })

}
module.exports=delete_book