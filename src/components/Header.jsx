// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-black-normal font-bold p-4 flex justify-between items-center">
      <div className="logo">
        <Link to="/"><img src="images/logo.png" alt="logo" /></Link>
      </div>

      <button 
        className="block lg:hidden p-2 rounded focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={24} />
      </button>

      <nav className={`${
        isOpen ? 'block' : 'hidden'
      } w-full lg:flex lg:w-auto lg:space-x-4 lg:items-center`}>
        <ul className="flex flex-col lg:flex-row lg:space-x-4">
          <li><Link to="/">Women Skincare</Link></li>
          <li><Link to="/">Men Skincare</Link></li>
          <li><Link to="/">Blog</Link></li>
          <li><Link to="/">Contact Us</Link></li>
          <li><Link to="/">Our Brand</Link></li>
        </ul>
      </nav>

      <ul className="flex space-x-4 items-center">
        <li><Link to="/search"><img src="icons/search.svg" alt="search" /></Link></li>
        <li><img src="icons/Line 1.svg" alt="line separator" /></li>
        <li className="flex space-x-1 items-center">
          <Link to="/login"><img src="icons/Ellipse 17.svg" alt="user" /></Link>
          <Link to="/profile"><p>DesignKid</p></Link>
          <Link to="/profile"><img src="icons/arrow_left.svg" alt="arrow left" /></Link>
        </li>
        <li><Link to="/cart"><img src="icons/shopping_cart.svg" alt="shopping cart" /></Link></li>
        <li className="flex space-x-1 items-center">
          <Link to="/language"><img src="icons/language.svg" alt="language" /></Link>
          <Link to="/language"><p>NGN (EN)</p></Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
