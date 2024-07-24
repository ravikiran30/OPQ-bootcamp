import React,{useState }from 'react'



    function Counter() {
        const [count,setCount] = useState(0)
        


        function increment() {
            setCount(count+1)
            
            console.log(count)
            
        }
        console.log("counter is executed")


        function decrement() {
            setCount (count-1)
            console.log(count)
        }
       
        return (
            <div>
                <h2>The value of the counter is {count}</h2>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        )

    }


export default Counter