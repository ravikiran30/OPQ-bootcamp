const express=require('express')
const connection=require('../mysql/mysql.js')
const error_handler=require('../controller/error_controller')

const list_books=function(req,res){
    const email=req.body.email
    const list_books_query='select * from books where email=?'
    connection.query(list_books_query,email,function(err,result){
        if(err){
            error_handler("enter the correct email",req,res,400)
        }else{
            if(result.length>0){
                const print=res.json(result)
                res.send(print)


            }else{
                error_handler("enter the correct email/no books found",req,res,400)
            }
        }
    })
    


}


module.exports=list_books