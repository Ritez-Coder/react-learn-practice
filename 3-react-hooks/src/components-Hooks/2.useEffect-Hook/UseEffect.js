import React, { useEffect, useState } from 'react'

export default function UseEffect() {

     console.log("First Render ...................... ______//-----")
     
     const [count , setCount] = useState(0);
     const [width , setWidth] = useState(window.innerWidth)
     

     // renders every time;
     useEffect(()=>{
          console.log(`rendering -${Math.random()*10} time...`)
     })
     
     // renders only once;
     useEffect(()=>{
          console.log("/--render Only ONce****************************--/")
     } , [])
     
     // renders where a particular state changes.. thats passed in dependency.
     useEffect(()=>{
          console.log("count changed to " , count)
          document.title = count;
     } , [count])
     
     // useState with cleanup
     useEffect(()=>{
          window.addEventListener("resize" , ()=>{
               setWidth(window.innerWidth)
          })

          return ()=> {
               window.removeEventListener("resize" , ()=>{
                    setWidth(window.innerWidth)
               })
          }
     }, [width])

     
  return (
    <div>
      <button onClick={()=>{ setCount(count+1) }}>+</button>
      <h2>{count}</h2>
      <button  onClick={()=>{ setCount(count-1) }}>-</button>

      <h2>The Width of the window is {width}</h2>
    </div>
  )
}
