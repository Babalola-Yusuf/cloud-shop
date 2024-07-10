// src/components/Header.jsx
import React, { useState, useContext } from 'react';
/* import { Link } from 'react-router-dom'; */
import { FaBars } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);

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

      <nav className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:space-x-4 lg:items-center`}>
        <ul className="flex flex-col lg:flex-row lg:space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="#bodyoil">Body Oil</Link></li>
          <li><Link to="#natural">Natural</Link></li>
          <li><Link to="#moisturizer">Moisturizer</Link></li>
          <li><Link to="#faceoil">Face Oil</Link></li>
          <li><Link to="#nightcream">Night Cream</Link></li>
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
        <li className="relative">
          <Link to="/cart">
            <img src="icons/shopping_cart.svg" alt="shopping cart" />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center">
                <img src="icons/shopping_cart.svg" alt="" />
                {cart.length}
                </span>
            )}
          </Link>
        </li>
        <li className="flex space-x-1 items-center">
          <Link to="/language"><img src="icons/language.svg" alt="language" /></Link>
          <Link to="/language"><p>NGN (EN)</p></Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
