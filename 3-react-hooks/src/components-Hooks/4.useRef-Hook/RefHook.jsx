import React,{useRef , useEffect, useState} from 'react'

export default function RefHook() {
     const [val , setVal] = useState(""); 
     const inputField = useRef();

  return (
    <div>
     <h3>Set to number,email,password,etc...</h3>
      <input onChange={(e)=>{
          setVal(e.target.value)
          // console.log(val)
      }} type="text" placeholder='text' ref={inputField} value={val.toLowerCase()} />
      <br />
      <small>input field is {}</small>
      <br />
      <button onClick={()=>{
          inputField.current.type = val;
          inputField.current.placeholder = val;
          inputField.current.style.color = "blue";
          inputField.current.style.border = "2px solid red"
      }}>Set</button>
    </div>
  )
}
