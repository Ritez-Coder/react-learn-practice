import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import Todos from './Todos'

export default function UseCallBack() {
     const [count , setCount] = useState(0);
     const [todos , setTodos] = useState([]);

    const handleTodo = useCallback(()=>{
     return setTodos(prev => [...prev , "New Entry!"])
    } , [todos])



  return (
    <div>
     < Todos todos={todos} setTodos={handleTodo}  />    
     <hr />
     <button onClick={()=>{
          setCount(count+1);
     }}>Count : {count}</button>
    </div>
  )
}
