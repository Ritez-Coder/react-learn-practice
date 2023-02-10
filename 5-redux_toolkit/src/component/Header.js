import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
     const item = useSelector(state => state.cart);
  return (
    <div>

     <div style={{display:"flex" , gap:"20px"}}>
          < Link style={{textDecoration:"none" , color: "blueviolet", fontWeight:"bold"}} to={"/"} >Home</Link>

          < Link style={{textDecoration:"none" , color: "blueviolet", fontWeight:"bold"}} to={"/cart"}>Cart {item.length}</Link>

          < Link style={{textDecoration:"none" , color: "blueviolet", fontWeight:"bold"}} to={"/products"}>Product</Link>
     </div>
    </div>
  )
}

export default Header
