
const error_handler = function(error,req,res,statusCode){
    res.statusCode = statusCode
    res.set({
        "Content-Type": "application/json"

    })
    if(statusCode == 500){
        res.send({
            "message":"Something went wrong"
        })
    }else if(statusCode == 400){
        res.send({
            "message":"bad API request"
        })
    }else{
        res.send({"message":"No User"})
    }
}
module.exports = error_handler