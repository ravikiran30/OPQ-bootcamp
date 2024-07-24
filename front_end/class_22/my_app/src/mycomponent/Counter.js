import React from "react"
import { useState } from "react"

function Counter(){
    const [count, setCount] = React.useState(0)

    function increment(){
        setCount(count + 1)
    }
    function decrement(){
        setCount(count - 1)
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>  INCREMENT  </button>
            <button onClick={decrement}>  DECREMENT  </button>
        </div>
    )


}
export default Counter