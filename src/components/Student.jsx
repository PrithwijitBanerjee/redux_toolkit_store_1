import React from 'react'
import {useSelector} from "react-redux"

const Student = () => {
    const {name,email}=useSelector((state)=>{
        return state
    })
  return (
    <div>
      <h1>Student name: {name}</h1>
      <h1> Student Email: {email}</h1>
    </div>
  )
}

export default Student
