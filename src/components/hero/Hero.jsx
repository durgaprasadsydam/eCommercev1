import React from 'react';
import './hero.css';
import HandIcon from '../assets/hand_icon.png';
import ArrowIcon from '../assets/arrow.png';
import HeroImg from '../assets/hero_image.png'


const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>New Arrivals only</h2>
            <div>
                <div className='hand-icon'>
                    <p>New</p>
                    <img src={HandIcon} alt="" />
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                <img src={ArrowIcon} alt="" />
             </div>
        </div>
        <div className='hero-right'>
            <img src={HeroImg} alt="" />
        </div>
    </div>
  );
}

export default Hero;
