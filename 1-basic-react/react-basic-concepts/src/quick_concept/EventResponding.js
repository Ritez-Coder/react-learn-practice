import React from 'react'

export default function EventResponding() {
  return (
    <div>
      <h1>Event Responding</h1>
      <button onClick={(e)=>{
          alert("you clicked me " +e)
      }}>Click Here</button>
    </div>
  )
}
