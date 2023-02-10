import React from 'react'

export default function SharingDataBetweenComponents(props) {
  return (
    <div>
      <div>{props.value}</div>
      <button onClick={props.increaseNum}>Increase</button>
      <button onClick={props.decreaseNum}>Decrease</button>
    </div>
  )
}
