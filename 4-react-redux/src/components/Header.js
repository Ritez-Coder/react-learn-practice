import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div style={{display:"flex" , justifyContent: "center" , gap:"50px" }}>
      < Link to={"/"} >Home</Link>
      <Link to={"/counter"}>Counter</Link>
    </div>
  )
}

export default Header
