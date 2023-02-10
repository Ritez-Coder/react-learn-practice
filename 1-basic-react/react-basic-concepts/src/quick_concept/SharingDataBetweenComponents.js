import React from 'react'
import Count from "./Count"
export default function SharingDataBetweenComponents() {
     const [num , setNum] = React.useState(0);
     
     function increaseNum(){
          setNum(num+1)
     }

     function decreaseNum() {
          setNum(num-1)
     }
  return (
    <div>
     <h1>Sharing Data Between Components</h1>
     < Count value={num} increaseNum={increaseNum} decreaseNum={decreaseNum} />
     <Count Count value={num} increaseNum={increaseNum} decreaseNum={decreaseNum}> 
     </Count>
    </div>
  )
}
