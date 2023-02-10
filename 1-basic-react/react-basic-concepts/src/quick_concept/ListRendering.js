import React from 'react'

export default function ListRendering() {
     const list = [
          {name : "Riteswar"  , id : 1},
          {name : "Ambrish" , id: 2},
          {name : "Simanta" , id: 3},
          {name : "Prasenjit" , id: 4},
     ]
  return (
    <div>
     <h1>List Rendering</h1>
      {list.map((val,ind) => <li key={ind.toString()}> {val.id} {val.name} </li>)}
    </div>
  )
}
