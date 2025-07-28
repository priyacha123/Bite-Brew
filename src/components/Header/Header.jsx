import React from 'react'
import logo from "../../assets/logo.jpg" 
import "./Header.css"

const Header = () => {
  return (
    <>
    <nav className="header">
      <div className="logo">
        <img src= {logo} alt="Food Villa Logo" />
      </div>
      <ul className="nav-items">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </nav>
    </>
  )
}

export default Header