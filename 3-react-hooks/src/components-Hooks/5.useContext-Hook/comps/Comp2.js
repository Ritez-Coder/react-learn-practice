import React, { useContext } from 'react'
import Comp3 from './Comp3'
import { Context } from './UseContext'

export default function Comp2() {
  const data = useContext(Context)
  return (
    <div>
      < Comp3 />
      <h3>My name is {data.name} from component-2</h3>
    </div>
  )
}
