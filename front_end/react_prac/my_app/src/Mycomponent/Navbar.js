import React from "react";


const Navbar =() =>{


    return(
        <nav className="flex flex-row space-x-8 pl-5 py-4 border place-items-center">
            {/* <img src={Banner} className="w-12 h-12"/> */}
            <a href="./">Home</a>
            <a href="./Cart">Cart</a>
            {/* <a href='#'>WatchList</a> */}
        </nav>
    
    )

}

export default Navbar;