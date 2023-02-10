import React ,{useReducer} from 'react'

const initialValue = 0;

function reducer(count , action) {
     switch(action.type) {
          case "INC" :
               return (count += 1 );
          case "DEC" :
               return count >= 1 ? count-=1 : count = 0
          default :
               return count
     }
}

export default function UseReducer() {
     const [count , dispatch] = useReducer(reducer , initialValue )
  return (
    <div>
     <h2>useReducer Hook in React...</h2>

     <button onClick={()=> dispatch({type : "INC"})}>Increment</button>
     <h2>{count}</h2>
     <button onClick={()=> dispatch({type:"DEC"})}>Decrement</button>
    </div>
  )
}
