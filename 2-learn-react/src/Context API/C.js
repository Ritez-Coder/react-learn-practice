import React from 'react'
import { useContext } from 'react'
import { Context } from './ContextAPI'


export default function C() {
     const {fname , lname} = useContext(Context)
     return (
          <h1>
                This is ContextAPI passing {fname} {lname}
          </h1>
     )
}
