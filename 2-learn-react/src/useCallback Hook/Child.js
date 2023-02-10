import React from 'react'
import { style } from './UseCallBack'

const Child = ({ num, fun, setNum }) => {
     console.log("Child Re-rendered___");
     fun()
     return (
          <div>
               <button style={style} onClick={() => { setNum(num + 20) }}>This is Child : {num}</button>
          </div>
     )
}

export default React.memo(Child)