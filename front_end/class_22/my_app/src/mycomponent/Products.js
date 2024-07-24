import React from "react"

function Products(){
    let Products=["laptops","phones","earphones","Mouse"]
    let productsList=[
        {id:1 ,name:"headphones", price:3500},
        {id:2 ,name:"Mouse", price:2000},
        {id:3 ,name:"phone", price:500},
        {id:4 ,name:"Keyboard", price:5500},
    ]
    return(
        <div>
            {
                Products.map((item,index)=>{
                    return(
                        <li>{item}</li>
                    )
                })

            }
            {
                productsList.map((item,index)=>{
                    return  (
                        <li>{item.name} cost is {item.price}</li>
                    )
                })
            }
        </div>
    )
}

export default Products