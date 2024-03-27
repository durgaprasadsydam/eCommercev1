import React, { useState } from 'react';
import './NavBar.css';

import Logo from '../assets/logo.png';
import CartIcon from '../assets/cart_icon.png';
import {Link} from 'react-router-dom';

const NavBar = () => {
  const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={Logo} alt="logo" />
        <p>SHOPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => {setMenu("shop")}}><Link to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("mens")}}><Link to="mens">Men</Link>{menu==="mens"?<hr/> : <></>}</li>
        <li onClick={()=> {setMenu("women")}}><Link to="womens">Women</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("kids")}}><Link to="kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='login'><button>Login</button></Link>
        <Link to='cart'><img src={CartIcon} alt="" /></Link>
          <div className='nav-cart-count'>0</div>
        
      </div>
    </div>
  );
}

export default NavBar;
