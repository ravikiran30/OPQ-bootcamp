const express=require('express')
const connection=require('../mysql/mysql.js')
const error_handler=require('../controller/error_controller')

const add_books=function(req,res){
    const email=req.body.email
    const book_name=req.body.book_name
    const status_of_book=req.body.status_of_book

    const email_query='select * from users where email=?'
    connection.query(email_query,email,function(err,result){
        if(err){
            error_handler("Enter valid email-id",req,res,400)
        }else{
            if(result.length>0){
                const book_query='select * from books where book_name=? and email=?'
                connection.query(book_query,[book_name,email],function(err1,res1){
                    if(err1){
                        error_handler("Error in adding book",req,res,400)

                    }else{
                        if(res1.length>0){
                            
                            error_handler("book is already exits in the database you can update the status",req,res,400)
                        }else{
                            
                            const add_book_query='insert into books set email=? , book_name=? ,status_of_book=?'
                            connection.query(add_book_query,[email,book_name,status_of_book],function(err2,res2){
                                if(err2){
                                    error_handler("Error in adding book",req,res,400)

                                }else{
                                    console.log(res2)
                                    res.json({message:"Book added successfully"})
                                }
                            })

                        }

                    }

                })
            }else{
                error_handler("enter valid email",req,res,404)
            }
        }
    })
}
    



module.exports=add_books