import { configureStore } from "@reduxjs/toolkit"


const initialState={
    name:"pritam",
    email:"pritam@gmail.com",
    age:"26",
    status:"Programmer",
    phone:'9966369856'
  }
  // create a store using configurestore hooks in toolkit
 export const Store=configureStore({
    reducer:(state)=>{
      return state
    },
    preloadedState:initialState
  })