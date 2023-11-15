import React from 'react'
import { useSelector } from 'react-redux'

export const User = () => {

  const {name,email,phone}=useSelector((state)=>{
    console.log(state);
    return state

    })

  return (
    <div>
      <hr />
      <h1>User Details</h1>
      
      <h3>
        User name is  {name}
        useer email is {email}
      </h3>

    </div>
  )
}
