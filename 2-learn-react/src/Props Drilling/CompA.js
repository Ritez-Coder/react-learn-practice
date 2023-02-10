import React from 'react'
import CompB from './CompB'
export default function CompA({name}) {
  return (
    <div>
      < CompB name={name} />
    </div>
  )
}
