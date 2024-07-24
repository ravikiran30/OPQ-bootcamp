import React from "react"

function Form(){

    return(
        <div>
            <h1> This is the form </h1>
            <form>
                <div>
                    <label>First Name   :</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Last Name    :</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Phone Number     :</label>
                    <input type="number"></input>
                </div>
                <button> Submit </button>
            </form>
        </div>
    )
}
export default Form