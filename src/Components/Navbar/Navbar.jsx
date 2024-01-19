import React, { useState } from "react";
import './Navbar.css';
import logo from '../img/logo.png';
import cart_icon from '../img/cart_icon.png';
import Link from 'react';

const Navbar = () =>{

    const [menu,setMenu] = useState("shop");

    return(
        <div className="navbar">
            <div className="logo_p"> 
                <img className='logo' src={logo} alt="image"/>
                <p>SUSHI SHOP</p>
            </div>
            
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("main")}}> <Link to='/'>MAIN PAGE</Link>  {menu==="main"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("menu")}}> <Link to='/menu'>SUSHI MENU</Link>   {menu==="menu"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("about")}}><Link to='/about'>ABOUT US</Link>  {menu==="about"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link> 
                <Link to='/cart'> <img className="cart_icon" src={cart_icon} alt="image"/> </Link>
            <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar