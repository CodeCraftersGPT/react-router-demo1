import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Home() {
const navigate = useNavigate();
 function placeOrder(){
    navigate('order')
  }
  return (
    <>
    <div>Welcome Home</div>
    <button onClick={placeOrder} >Place Order</button>
    </>
  )
}
