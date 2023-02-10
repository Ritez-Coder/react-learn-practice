import React , {useState , useCallback } from 'react'
import Child from './Child'

const style = {
     color : "white" ,
     backgroundColor : "black",
     borderRadius : "10px",
     padding : "10px 15px",
     cursor : "pointer" 
}

export {style}

export default function UseCallBack() {
     console.log("Parent re-rendered.....");
     const [count , setCount] = useState(1)
     const [num , setNum] = useState(100)

     const externalFun = useCallback(()=>{console.log("Hello Ritez..")} , [])

  return (
    <div>
      < Child num={num} fun={externalFun} setNum={setNum} />
      <br />
      <button style={style} onClick={()=> setCount(count + 100)}>Count+100 -- {count} </button>
    </div>
  )
}
