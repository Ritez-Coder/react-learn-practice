import React from 'react'
import A from './A'

const Context = React.createContext()

export default function ContextAPI() {
  return (
    <div>
      < Context.Provider value={{fname : "Riya" , lname : "Sen"}} >
          < A />
      </Context.Provider>
    </div>
  )
}
export {Context}