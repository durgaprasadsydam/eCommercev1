import React from 'react';
import './footer.css';
import FooterLogo from '../assets/logo_big.png';
import InstaIcon from '../assets/instagram_icon.png';
import Whatsapp from '../assets/whatsapp_icon.png';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={FooterLogo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About Us</li>
        <li>Contact Us</li>
    </ul>
    <div className='footer-social-icons'>
        <div className='footer-icons-container'>
            <img src={InstaIcon} alt="" />
        </div>
        <div className='footer-icons-container'>
            <img src={Whatsapp} alt="" />
        </div>
        <div className='footer-icons-container'>
            <img src={InstaIcon} alt="" />
        </div>
    </div>
    <div className='footer-copyright'>
        <hr />
        <p>Copyright 2024 All rights Reserved.</p>
    </div>
    </div>
    
  );
}

export default Footer;
