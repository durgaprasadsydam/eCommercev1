import React from 'react';
import './offers.css';
import ExcluciveImg from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Excluseive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={ExcluciveImg} alt='' />
        </div>
      
    </div>
  );
}

export default Offers;
