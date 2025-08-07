import { useContext, useState } from 'react'
import logo from "../../assets/logo.jpg" 
import "./Header.css"
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';
import UserContext from '../../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const { loggedInUser } = useContext(UserContext)
  const onlineStatus = useOnlineStatus();

// selector -> subscribing to store
const cartItems = useSelector((store) => store.cart.items);

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
          <Link to="/grocery"> Grocery </Link>
          <Link to="/cart"> Cart {" "} {cartItems.length} items </Link>
        <button
        onClick={() => {
          loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login") 
        }}
        >
          {loginBtn}
        </button>
        <Link to="/cart"> {loggedInUser} </Link>
      </ul>
    </nav>
    </>
  )
}

export default Header