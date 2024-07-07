// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-white text-black-normal font-bold p-4 flex justify-between items-center">
    <div className="logo">
      <Link to="/"><img src="../images/logo.png" alt="logo" /></Link>
    </div>
    
    <nav >
      <ul className="flex space-x-4">
        <li><Link to="/">Women Skincare</Link></li>
        <li><Link to="/">Men Skincare</Link></li>
        <li><Link to="/">Blog</Link></li>
        <li><Link to="/">Contact Us</Link></li>
        <li><Link to="/">Our Brand</Link></li>
      </ul>
    </nav>

    <ul className="flex space-x-4 items-center">
        <li><Link to="/cart"></Link><img src="../icons/search.svg" alt="" /></li>
        <li><img src="../icons/Line 1.svg" alt="line1" /></li>
        <div className="flex space-x-1 items-center">
          <li><Link to="/login"><img src="../icons/Ellipse 17.svg" alt="user" /></Link></li>
          <li><Link to="/cart"><p>DesignKid</p></Link></li>
          <li><Link to="/cart"><img src="../icons/arrow_left.svg" alt="arrow left" /></Link></li>
        </div>
        
        <li><Link to="/cart"><img src="../icons/shopping_cart.svg" alt="shopping cart" /></Link></li>
        <div className="flex space-x-1 items-center ">
          <li><Link to="/cart"><img src="../icons/language.svg" alt="language" /></Link></li>
          <li><Link to="/cart"><p> NGN (EN)</p></Link></li>
        </div>
        

    </ul>
  </header>
);

export default Header;
