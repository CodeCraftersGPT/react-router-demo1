import React from 'react'
import {Link, NavLink} from 'react-router-dom'


export default function Navbar() {

  const navLinkStyles = ()=>{
    return {
      fontWeight:'bold',
      textDecoration:'none',
      padding:'1em'
    }
  }

  return (
    <nav>
        <NavLink to="/" style={navLinkStyles} >Home</NavLink>
        <NavLink to="/about">About</NavLink>
    </nav>
  )
}
