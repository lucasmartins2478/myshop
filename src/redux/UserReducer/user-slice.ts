import { createSlice } from "@reduxjs/toolkit";

export interface User{
  email:string,
  password:string,
  name?:string,
  age?:number
}
interface UserState{
  user:User | null,
}
const initialState :UserState = {
  user:null
}
 export const userSlice = createSlice({
  initialState,
  name:'user',
  reducers:{
    login:(state, action)=>{
      state.user = action.payload
    },
    logout:(state, action)=>{
      state.user = null
    }
  }
 })

 export const {login, logout} = userSlice.actions