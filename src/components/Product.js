import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'


export default function Product() {
   const navigate = useNavigate();
  return (
    <>
    <div>Products</div>
    <button onClick={()=>{navigate('FeatureProducts')}}>Featured Products</button>
    <button onClick={()=>{navigate('NewProducts')}}>New Products</button>
    <Outlet />
    </>
  )
}
