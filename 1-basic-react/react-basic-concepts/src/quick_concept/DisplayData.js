import React from 'react'

export default function DisplayData() {
     const products = {
          name : "mobile" ,
          price : 2000,
          avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLXxxD8F8EPR3PkVYc9__KG46e46bgx60UMcxlOv8WvRqSIJJO8njFBUWNXf2x24FoWA&usqp=CAU"
     }
  return (
    <div>
      <h1> Product Name : {products.name}</h1>
      <h2>Price : {products.price}</h2>
      <img src={products.avatar} alt="" width="400px" />
    </div>
  )
}
