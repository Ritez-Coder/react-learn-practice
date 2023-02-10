import React from 'react'

const betterFun = debounce((w)=> {console.log("clicked...", w.target.value ) } , 2000)
export default function Debouncing() {
     return (
          <div>
               <h1>Debouncing ...</h1>
               <input  onChangeCapture={betterFun} style={{ fontSize: "1.2rem" , padding: "10px 5px", width: "500px" , color: "blue", outline: "none", textAlign: "start" }} type="text" placeholder='Enter Something' />
          </div>
     )
}

function debounce(call , t) {
     let timer ;
     return function(e) {
          if(timer) clearTimeout(timer);
          timer = setTimeout(()=> {
               call(e);
          },t)
     }
} 

