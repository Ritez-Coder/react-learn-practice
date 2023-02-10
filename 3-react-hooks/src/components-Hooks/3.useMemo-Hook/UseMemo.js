import React, {useMemo, useState ,  } from 'react'

function expensiveFunction(num) {
     for(let i = 0 ; i<1000000000; i++){}
     return num;
}    

export default function UseMemo() {
     const [count , setCount] = useState(0);
     const [show , setShow] = useState(false);     

     let number = useMemo(()=>{
          return expensiveFunction(count);
     } , [count])

     // const num = expensiveFunction(count)

     function handleCount() {
          setCount(count+1);
     }

  return (
    <div>
      <h2>useMemo Hook</h2>
      <button onClick={handleCount}>Counter : {number}</button>
      <br />
      <br />
      <button onClick={()=> setShow(!show)}>{show ? "Click Me Please !" : "You Clicked Me !"}</button>
    </div>
  )
}
