import React,{useRef} from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function UseRef() {
     const [input ,setInput] = useState("");

     const count = useRef(0)

     useEffect(()=> {
          count.current+=1;
     })

  return (
    <div>
      <input type="text" onChange={(e)=>{ setInput(e.target.value) }}  />
      <br />
      <small>{input}</small>
      <br />
      <big>Component Rendering - {count.current} time</big>
    </div>
  )
}
