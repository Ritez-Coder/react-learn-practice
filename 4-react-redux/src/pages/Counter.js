import React from 'react'
import { useSelector } from 'react-redux'


export default function Counter() {
     const state = useSelector( state => state.reducer)
  return (
    <div>
      <h1>{state} , 20</h1>
    </div>
  )
}
