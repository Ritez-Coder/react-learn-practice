import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const cartSlice = createSlice({
     name : "cart" ,
     initialState, 
     reducers : {
          add(state , action) {
               return [...state , action.payload]
          } ,
          remove(state , action) {
               state = state.filter(item => item.id !== action.payload)
               return state;
          }
     }
})

export const {add , remove} = cartSlice.actions;
export default cartSlice;