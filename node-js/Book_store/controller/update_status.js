const express=require('express')
const connection=require('../mysql/mysql.js')
const error_handler=require('../controller/error_controller')



const update_book=function(req,res){
    const email=req.body.email
    const book_id=req.body.book_id
    const status_of_book=req.body.status_of_book

    const search_query='select * from books where email=? and book_id=?'
    connection.query(search_query,[email,book_id],function(err,result){
        if(err){
            error_handler("Enter valid email id / book_id",req,res,400)
        }else{
            if(result.length>0){
            
                const update_query='update books set status_of_book=? where book_id=?'
                connection.query(update_query,[status_of_book,book_id],function(err1,res1){
                    if(err1){
                        error_handler("Error in updating book status",req,res,400)
                    }else{
                        res.json({message:"Updated book status..."})
                    }

                })


            }else{
                error_handler("Book not found",req,res,400)
            }

        }
    })

}

module.exports=update_book