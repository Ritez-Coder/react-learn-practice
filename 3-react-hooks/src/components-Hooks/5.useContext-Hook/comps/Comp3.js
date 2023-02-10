import React, { useContext } from 'react'
import { Context } from './UseContext'


export default function Comp3() {
  const useData = useContext(Context);
  return (
    <div>
      <h1>My Name is {useData.name} and age is {useData.age}</h1>
    </div>
  )
}
