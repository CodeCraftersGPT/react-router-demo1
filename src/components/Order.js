import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Order() {
    const navigate = useNavigate();
  return (
    <>
    <div>your order has been placed</div>
    <button onClick={()=>{navigate(-1)}}>Go Back</button>
    </>
  )
}
