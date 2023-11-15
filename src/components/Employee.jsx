import React from 'react'
import { useSelector } from 'react-redux'

const Employee = () => {
   const {name,email,phone}=useSelector((state)=>{
    console.log(state);
    return state

    })
  return (
    <div>
      <h1>Emp Name : {name}</h1>
    </div>
  )
}

export default Employee
