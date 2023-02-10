import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { incNumber , decNumber } from '../action';

function Home() {

     const value = useSelector(state => state.reducer)
     const dispatch = useDispatch();

     document.title = value;
  return (
    <div style={{display:"flex" , justifyContent:"space-around"}}>
      <button onClick={()=> dispatch(incNumber(5)) }> + </button>
      <button onClick={()=> dispatch(decNumber(5))}> - </button>
    </div>
  )
}

export default Home
