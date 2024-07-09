// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className=" text-white">
    <div className="pre-footer flex justify-between items-center ">
      <div className="flex gap-4 items-center">
        <img src="../icons/bunny vector.svg" alt="" />
        <p>No tests on animals</p>
      </div>
      <div className="flex gap-4 items-center">
        <img src="../icons/Vector.svg" alt="" />
        <p>Only licensed products</p>
      </div>
      <div className="flex gap-4 items-center">
        <img src="../icons/Wheat.svg" alt="" />
        <p>100% natural</p>
      </div>
      < div className="flex gap-4 items-center">
        <img src="../icons/Vector (1).svg" alt="" />
        <p>100% organic</p>
      </div>
    </div>
    
    {/*  <nav >
      <ul className="flex space-x-4">
        <li><Link to="/">Women Skincare</Link></li>
        <li><Link to="/">Men Skincare</Link></li>
        <li><Link to="/">Blog</Link></li>
        <li><Link to="/">Contact Us</Link></li>
        <li><Link to="/">Our Brand</Link></li>
      </ul>
    </nav> */}
  
    <div className='footer-links xl:flex justify-between items-center'>

    <div className='left-section flex flex-col gap-3 mt-20'>
        <h2 className="text-white font-bold text-2xl">How can we Help?</h2>
        <ul className="flex flex-col gap-3">
        <li><Link to="/">Skinluxe branches</Link></li>
        <li><Link to="/">Contact Us</Link></li>
        <li><Link to="/">FAQ</Link></li>
        <li><Link to="/">Our Brand</Link></li>
        <li><Link to="/">Blog</Link></li>
      </ul>
    </div>
    <div className='middle-section flex flex-col gap-3 mt-20'>
        <h2 className="text-white font-bold text-2xl">Products</h2>
        <ul className="flex flex-col gap-3">
        <li><Link to="/">Body Oil</Link></li>
        <li><Link to="/">Natural</Link></li>
        <li><Link to="/">Moisturizers</Link></li>
        <li><Link to="/">Face Oil</Link></li>
        <li><Link to="/">Night Cream</Link></li>
      </ul>
    </div>
    <div className='right-section flex justify-center flex-col gap-3 mt-20'>
        <h2 className="text-white font-bold text-2xl">About Us</h2>
        <p>Join the Skinluxe newsletter and be first to hear about news, offers and skincare advice</p>
        <form action="">
          <div className='flex items-center gap-4' >
            <input type="text" placeholder="Email Address" id='email' className="email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
          <div className='flex items-start gap-2 py-2'>
          <input type="checkbox" />
          <p className='m-0'>By submitting your email, you agree to receive advertising emails from Skinluxe. Please review our Privacy Policy, </p>
          </div>
          
        </form>
        
        
    </div>
    </div>
    <div className='address-and-social-icons flex justify-between'>
      <div className="address">Address & Phone Number</div>
      <div className="social-icons">Social Media Icons</div>
    </div>
    <div className='copyright-and-privacy-section flex justify-between'>
      <div className="address">Address & Phone Number</div>
      <div className="social-icons">Social Media Icons</div>
    </div>
      
    </footer>
);
   
export default Footer;
