import React, { useState } from 'react'
import logo from "../../assets/logo.jpg" 
import "./Header.css"
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <>
    <nav className="header">
      <div className="logo">
        <img src= {logo} alt="Food Villa Logo" />
      </div>
      <ul className="nav-items">
        <li>Online status: {onlineStatus ? "✅" : "🔴"} </li>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/cart"> Cart </Link>
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