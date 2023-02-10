import React,{ createContext } from 'react'
import Comp1 from './Comp1'

const Context = createContext();

export default function UseContext() {
  return (
    <Context.Provider value={{name:"stardust" , age:23}}>
     <Comp1 />
    </Context.Provider>
  )
}
export {Context}
