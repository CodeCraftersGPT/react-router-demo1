import React from 'react'
import {Link, NavLink} from 'react-router-dom'


export default function Navbar() {

  const navLinkStyles = ({isActive})=>{
    return {
      fontWeight: isActive ? 'bold':'normal',
      textDecoration: isActive ? 'none':'underline',
      padding:'1em'
    }
  }

  return (
    <nav>
        <NavLink to="/" style={navLinkStyles} >Home</NavLink>
        <NavLink to="/about" style={navLinkStyles}>About</NavLink>
        <NavLink to="/product" style={navLinkStyles}>Product</NavLink>
    </nav>
  )
}
