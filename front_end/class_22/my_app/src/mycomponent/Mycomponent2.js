import React from "react"

function Mycomponent2(){
    let firstname="ravi"
    let lastname="kiran"
    let message =()=>{
        return "I am fine Here"
    }
    let age=20

    return(
        <div>
            <h2>My Name is {firstname}{ }{lastname}</h2>
            <h3>My age after 10 years is {age+10}</h3>
            <h3>{message()}</h3>
        </div>

    )
}

export default Mycomponent2