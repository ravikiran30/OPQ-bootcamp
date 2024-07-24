import React from "react";

function Form(){



    return(
        <div>
            <h2> This is a Form</h2>
            <form>
                <label> Name: </label>
                <input type="text" name="name" placeholder="Enter your name" />
                <label> Email: </label>
                <input type="email" name="email" placeholder="Enter your email" />
                <label> Password: </label>
                <input type="password" name="password" placeholder="Enter your password" />
                <button> Submit </button>

            </form>
        </div>
    )

}

export default Form