import React from "react";
import './Navbar.css'
import logo from '../img/logo.png';
import cart_icon from '../img/cart_icon.png';

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="logo_p"> 
                <img className='logo' src={logo} alt="image"/>
                <p>SUSHI-SHOP</p>
            </div>
            
            <ul className="nav-menu">
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
            <img className="cart_icon" src={cart_icon} alt="image" />
            </div>
        </div>
    )
}

export default Navbar