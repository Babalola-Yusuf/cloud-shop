// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-black-normal text-white p-4 flex justify-between items-center">
    <div className="logo">
      <Link to="/">Company Logo</Link>
    </div>
    <nav>
      <ul className="flex space-x-4">
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
