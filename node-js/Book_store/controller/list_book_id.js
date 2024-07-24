const express=require('express')
const connection=require('../mysql/mysql.js')
const error_handler=require('../controller/error_controller')


const list_book_id=function(req,res){
    const email=req.body.email
    const book_id=req.body.book_id

    const list_book_id_query='select * from books where email=? and book_id=?'
    connection.query(list_book_id_query,[email,book_id],function(err,result){
        if(err){
            error_handler("Enter valid email / book_id",req,res,400)

        }else{
            if(result.length>0){
                const print =res.json(result)
                res.send(print)
            }else{
               res.json({
                    message:"book not found"
                })
                
            }
        }
    })

}

module.exports=list_book_id