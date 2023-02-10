import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

function Cart() {
     const items = useSelector(state => state.cart);
     const dispatch = useDispatch();
  return (
    <div>
      {items.map(val => <div> <img height={"50px"} src={val.image} alt="" /> <button onClick={()=>{
          dispatch(remove(val.id))
      }}>Remove</button> </div>)}
    </div>
  )
}

export default Cart
