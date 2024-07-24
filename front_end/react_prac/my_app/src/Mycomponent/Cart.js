import React from "react";
import { useState } from "react";


const Cart =()=>{

    const [cart_item,setCart_item] =useState(JSON.parse(localStorage.getItem('item')))
    
    console.log(cart_item)


    let removeHandler =(data) =>{
        let newCart = cart_item.filter((item)=>{
            return item.recipe.label !== data.recipe.label

        })
        // console.log(data.recipe.label)
        localStorage.setItem('item',JSON.stringify(newCart))
        setCart_item(newCart)

    }


    return(
        <div>
            {
                <table className="w-full m-4 text-left ">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Price</th>
                            <th>Quantity</th>

                        </tr>
                    </thead>
                    {
                        cart_item.map((data)=>{
                            console.log(data)
                            return(
                                <tr className="space-y-*">
                                    <td>
                                        <img className="h-auto w-[15rem] rounded-full" src={data.recipe.image} alt="card" />

                                    </td>
                                    <td>{data.recipe.label}</td>
                                    <td>{ <p> Total Amount of Calories:  {Math.round(data.recipe.calories)}</p>}</td>
                                    <td><button className=" w-24 text-zinc-200 rounded-full bg-red-600" onClick={() =>{removeHandler(data)}}>Remove</button></td>
                                </tr>
            
                            )
                        })
                    }
                     
                    
                </table>
                
            }
        </div>
    
    )


}


export default Cart

