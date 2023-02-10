import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { add } from '../store/cartSlice'
import { useDispatch } from 'react-redux'

function Products() {

     const dispatch = useDispatch()
     const [products, setProducts] = useState([])

     useEffect(() => {
          const fetchProducts = async () => {
               const res = await fetch("https://fakestoreapi.com/products")
               const data = await res.json();
               setProducts(data)
          }
          fetchProducts()
     }, [])

     return (

          <div className='products'>
               <h3>Products</h3>
               <ul style={{display:"flex" , flexWrap:"wrap" , gap:"10px"}}>

                    {
                         products.map((product, id) => {
                              return <li style={{border:"1px solid red", padding:"10px"}} key={id.toString()}><img height={"100px"} src={product.image} alt="" />  <button onClick={()=>{
                                   dispatch(add(product))
                              }} style={{fontSize:".6rem"}} >AddtoCart</button> </li>
                         })
                    }
               </ul>
          </div>
     )
}

export default Products
