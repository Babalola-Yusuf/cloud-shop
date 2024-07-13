// src/components/Header.jsx
import React, { useState, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const location = useLocation();

  const isActive = (path) => location.hash === path || location.pathname === path;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" text-black-normal p-4 flex flex-col gap-5 justify-items-start ">
      <div className=" flex justify-between  ">
          <div className="flex flex-row-reverse lg:flex-row justify-between items-center gap-x-24 ">
          <div className="logo">
            <Link to="/"><img src="images/logo.png" alt="logo" /></Link>
          </div>

          <button
            className="block lg:hidden p-2 rounded focus:outline-none"
            onClick={toggleSidebar}
          >
            <FaBars size={24} />
          </button>
          </div>
          
          <nav className={`fixed flex flex-col bg-white z-50 top-0 right-0 w-64 h-full  shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:transform-none lg:translate-x-0 lg:shadow-none lg:bg-transparent lg:flex lg:w-auto lg:space-x-4 lg:items-center`}>
            <button
              className="absolute top-4 right-4 p-2 rounded focus:outline-none lg:hidden"
              onClick={toggleSidebar}
            >
              <FaTimes size={24} />
            </button>
            <ul className="flex flex-col gap-8 items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 text-purpleNormal p-4 lg:p-0 mt-20 lg:mt-5  ">
              <li><Link to="/" className={`${isActive('/') ? 'text-purpleActive' : 'hover:text-purpleActive'}`} onClick={toggleSidebar}>Home</Link></li>
              <li><Link to="#bodyoil" className={`${isActive('#bodyoil') ? 'text-purpleActive' : 'hover:text-purpleActive'}`} onClick={toggleSidebar}>Body Oil</Link></li>
              <li><Link to="#natural" className={`${isActive('#natural') ? 'text-purpleActive' : 'hover:text-purpleActive'}`} onClick={toggleSidebar}>Natural</Link></li>
              <li><Link to="#moisturizer" className={`${isActive('#moisturizer') ? 'text-purpleActive' : 'hover:text-purpleActive'}`} onClick={toggleSidebar}>Moisturizer</Link></li>
              <li><Link to="#faceoil" className={`${isActive('#faceoil') ? 'text-purpleActive' : 'hover:text-purpleActive'}`} onClick={toggleSidebar}>Face Oil</Link></li>
              <li><Link to="#nightcream" className={`${isActive('#nightcream') ? 'text-purpleActive' : 'hover:text-purpleActive'}`} onClick={toggleSidebar}>Night Cream</Link></li>
            </ul>
          </nav>

          <ul className="flex space-x-4 items-center">
            <li className='hidden lg:flex'><Link to="/search"><img src="icons/search.svg" alt="search" /></Link></li>
            <li className="hidden lg:flex"><img src="icons/Line 1.svg" alt="line separator" /></li>
            {/* <li className="flex space-x-1 items-center">
              <Link to="/login"><img src="icons/Ellipse 17.svg" alt="user" /></Link>
              <Link to="/profile"><p>DesignKid</p></Link>
              <Link to="/profile"><img src="icons/arrow_left.svg" alt="arrow left" /></Link>
            </li> */}
            <li className="relative hover:scale-150 ease-in duration-300">
              <Link to="/cart">
                <img src="icons/shopping_cart.svg" alt="shopping cart" />
                {cart.length > 0 && (
                  <div className="absolute -top-2 -right-2 text-xs w-5 h-5 flex items-center justify-center text-purpleNormal rounded-full">
                    {cart.length}
                    <span className="absolute top-2 right-2 text-xs w-5 h-5 flex items-center justify-center">
                      <img src="icons/cart-icon.svg" alt="" />
                    </span>
                  </div>
                )}
              </Link>
            </li>
            <li className="flex space-x-1 items-center">
              <Link to="/language"><img src="icons/language.svg" alt="language" /></Link>
              <Link to="/language"><p>NGN (EN)</p></Link>
            </li>
          </ul>
      </div>
      <div className="search flex justify-between max-w-96 lg:hidden font-normal text-xs ml-3">
        <input type="text" placeholder="Search for products" className='border border-purpleNormal py-1.5 px-10 w-64 relative' />
        <img src="icons/search.svg" alt="" className='absolute ml-3 mt-1'/>
        <button className='bg-purpleNormal text-white w-20 py-1.5 px-3.5 '>Search</button>
      </div>
      
    </header>
  );
};

export default Header;
