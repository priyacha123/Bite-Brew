import React, { useState } from 'react'
import logo from "../../assets/logo.jpg" 
import "./Header.css"

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
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
        <button
        onClick={() => {
          loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login") 
        }}
        >
          {loginBtn}
        </button>
      </ul>
    </nav>
    </>
  )
}

export default Header