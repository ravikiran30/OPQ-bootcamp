import React from 'react';
import logo from '../image.png'

function Navbar(){

    return(
        <nav className="flex flex-row space-x-8 pl-5 py-4 border place-items-center">
            <img src={logo} className="w-12 h-12"/>
            <a href="#">Movies</a>
            <a href='#'>WatchList</a>
        </nav>
    )
}
export default Navbar
