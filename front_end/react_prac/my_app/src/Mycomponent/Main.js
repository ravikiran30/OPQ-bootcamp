import React from "react";
import Products from './Products.js';




import { useState } from 'react';

const Main = () => {


    const [search, setSearch] = useState(" ")
    const [data, setData] = useState([])

    const YOUR_APP_KEY = "a627acec83a30ee680eaaf7bea4db000"
    const YOUR_APP_ID = "31d47159"

    const submitHandle = e => {
        e.preventDefault()
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`
        ).then(response => response.json())
            .then(data => setData(data.hits))


    }

    return (
        <div>
            <center>
                <form  onSubmit={submitHandle}>
                    <input className="w-96 text-[30px] border-8 border-sky-500 " type="text" placeholder='enter item' value={search} onChange={(e) => setSearch(e.target.value)}></input><br />
                    <button className='text-[30px] bg-indigo-500'>Search</button>
                </form>
                {data.length >= 1 ? <Products data={data} /> : null}

            </center>
        </div>
    )

}

export default Main