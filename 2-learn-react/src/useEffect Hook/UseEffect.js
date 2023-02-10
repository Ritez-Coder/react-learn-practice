import React from 'react'
import { useEffect , useState } from 'react'

export default function UseEffect() {

     const [num , setNum] = useState(0)
     
     
     // On Every Rendered
     useEffect(()=>{
          console.log("I Re-rendered")
     })

     // On first Render/Mount Only - componentDidMount alternative
     useEffect(()=>{ console.log("The Component Mounted") } , [])

     // component did update - alternative
     useEffect(()=>{console.log(`component updated the num became ${num}`)} , [num])
  return (
    <div>
      <h1>UseEffect Tutorial</h1>
      <h2>{num}</h2>
      <button onClick={()=>{setNum(num+1)}}>click</button>
    </div>
  )
}
