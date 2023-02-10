import React, { useState } from 'react'

export default function UpdatingScreen() {
  const [count, setCount] = useState(0)

  const increaseNum = () => {
    setCount(count + 1)
  }

  if(count < 0) {
    setCount(0)
  }

  const decreaseNum = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <h1>Updating Screen</h1>
      <h1>{count}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
    </div>

  )
}
