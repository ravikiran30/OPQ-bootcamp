import React from 'react'
import { useState } from 'react'

const Products = ({ data }) => {
    
    const [cart ,setCart] =useState(JSON.parse(localStorage.getItem('item')))

    
    let addToCart =function(data){
        // cart.push(data)
        let newCart= [...cart,data]
        
        localStorage.setItem('item',JSON.stringify(cart))
        setCart(newCart)
        console.log(cart)
    }

    return (
        <div>
            <div className='flex flex-wrap'>

                {data.map(data =>
                    <div className=' w=[200px] h=[40vh] border-solid border-indigo-500/100 p-8  hover:scale-110 duration-300'>
                        <img className="bg-[length:180px_80px] w=[30px] h=[50px]" src={data.recipe.image} alt="card" />
                        <center>
                            <h4>{data.recipe.label}</h4>
                            <p> Total Amount of Calories:  {Math.round(data.recipe.calories)}</p>
                            <div className='grid grid-cols-2  '>
                                <div>
                                    <button className='border-solid bg-[#DC143C] text-emerald-50 w-1/2'>  BUY     </button>
                                </div>
                                <div>
                                    <button className='border-solid bg-[#DC143C] text-emerald-50 w-1/2' onClick={ () => {addToCart(data)}}>  Add To Cart   </button>
                                </div>
                            </div>
                        </center>
                    </div>
                )}

            </div>

        </div>

    )

}
export default Products