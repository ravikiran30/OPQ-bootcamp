import React from "react";


function Products(){
    // let Products = ['Laptops','Headphones','Kayboard','Mouse']
    let ProductsList=[
        {id :1 ,name:"laptops",price :35000},
        {id :2 ,name:"headphones",price :1500},
        {id :3 ,name:"Keyboard",price :1500},
        {id :4 ,name:"Mouse",price :1500}
    ]
    return (
        // <div>
        //     {
        //         Products.map((element,idx)=>{
        //             return <li>{element}</li>
        //         })
        //     }
        // </div>
        <div>
            {
                ProductsList.map((element,idx)=>{
                    return <li>{element.name} : {element.price}</li>
                })
            }
        </div>
    )
}

export default Products;