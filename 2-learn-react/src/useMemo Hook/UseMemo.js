import React, { useState , useMemo } from "react";

function expensiveCount( num ) {
     for(let i = 0; i < 1000000000 ; i++){}
     console.log("___expensive_calculation___")
     return num + 1
}

const style = {
     color : "white" ,
     backgroundColor : "black",
     borderRadius : "10px",
     padding : "10px 15px",
     cursor : "pointer" 
}

const UseMemo = () => {
     const [count , setCount] = useState(0)
     const [countx , setCountX] = useState(10)
     const data = useMemo(()=> expensiveCount(count) , [count] ) 

     const handleCount = () => {
          setCount(count => count +1)
     }
     const handleCountx =()=> setCountX(countx+100)

     return <div>
          <h1>useMemo Hook</h1>
          < Count handleCount={handleCount} count={data} />
          <br />
          < CountX handleCountx={handleCountx} countx={countx} />
     </div>
}

function Count({handleCount , count}) {
     console.log("useMemo res : ",count)
     return <div>
          <button style={style}  onClick={handleCount}>Count : {count}</button>

     </div>
}

function CountX({countx , handleCountx}) {
     return <div>
          <button  style={style} onClick={handleCountx}>CountX : {countx}</button>
     </div>
}

export default UseMemo;
