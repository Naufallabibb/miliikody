import React from 'react';
import './header.css';
import CTA from './CTA';
import binarImage from '../../assets/headermilik.png';


const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Miliikody</h5>
        <p>Kerajinan yang Berbicara dalam Kesederhanaan dan Gaya.</p>
        <div className="binar-image">
          <img src={binarImage} alt='Binar Academy' />
        </div>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
