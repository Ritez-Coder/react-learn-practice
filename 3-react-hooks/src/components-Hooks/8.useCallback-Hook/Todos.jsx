import React , { memo } from 'react'

 function Todos({todos , setTodos}) {
     console.log("Todos Component rendered...")
  return (
    <div>
               <button onClick={setTodos}>Add Todo</button>
          <ul>
               {todos.map((val , ind)=>{
                    return <li key={ind.toString()} >{val + ind}</li>
               })}
          </ul>
    </div>
  )
}

export default memo(Todos);