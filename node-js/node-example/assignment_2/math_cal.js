

function add(a,b)
{
    return a+b;
}
function substract(a,b)
{
    return a-b;
}
function multipliy(a,b)
{
    return a*b;
}
function divison(a,b){
    if(b==0)
        {
            return "Invalid Values";
        }
    else{
        return a/b;
    }
}

// export method
module.exports =
    { 
        add,
        substract,
        multipliy,
        divison
    }