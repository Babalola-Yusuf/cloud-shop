// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className=" text-white">
    <div className="pre-footer flex justify-between items-center ">
      <div className="flex gap-4 items-center">
        <img src="icons/bunny vector.svg" alt="" />
        <p>No tests on animals</p>
      </div>
      <div className="flex gap-4 items-center">
        <img src="icons/Vector.svg" alt="" />
        <p>Only licensed products</p>
      </div>
      <div className="flex gap-4 items-center">
        <img src="icons/Wheat.svg" alt="" />
        <p>100% natural</p>
      </div>
      < div className="flex gap-4 items-center">
        <img src="icons/Vector (1).svg" alt="" />
        <p>100% organic</p>
      </div>
    </div>
      
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
            <button className="subscribe-btn hover:border-2 hover:border-gold-dark hover:text-white">Subscribe</button>
          </div>
          <div className='flex items-start gap-2 py-2'>
          <input type="checkbox" />
          <p className='m-0'>By submitting your email, you agree to receive advertising emails from Skinluxe. Please review our Privacy Policy, </p>
          </div>
          
        </form>    
    </div>
    </div>
    <div className='address-and-social-icons flex flex-col gap-2 md:flex-row justify-between md:items-center p-5'>
      <div className='address-and-phone flex flex-col md:flex-row gap-2'>
        <div className="address flex ">
          <div className="location flex gap-2">
            <img src="icons/location-icon.svg" alt="" className='w-6 h-6'/>
            <p>123 Wellington Bassey Way</p>
          </div>
          
          <img src="icons/indicator.svg" alt="" className='w-6 h-6' />
        </div>
        <div className="phone flex gap-2">
          <img src="icons/phone-icon.svg" alt="" className='w-6 h-6' />
          <p>234-904-500-4705</p>
        </div>  
      </div>

      <div className="social-icons flex gap-2">
        <a href="#"> <img src="icons/_Instagram.svg" alt="" className='w-6 h-6'/></a>
        <a href="#"> <img src="icons/facebook-icon.svg" alt="" className='w-6 h-6'/></a>
        <a href="#"> <img src="icons/_Twitter.svg" alt="" className='w-6 h-6'/></a>
        <a href="#"> <img src="icons/_TikTok.svg" alt="" className='w-6 h-6'/></a>   
      </div>
      
    </div>
    <div className='copyright-and-privacy-section flex flex-col gap-2 md:flex-row justify-between p-5'>
      <div className="copyright flex gap-2">
        <img src="icons/copyright.svg" alt="" className='w-6 h-6'/> <p>2024 Skinluxe. All Rights Reserved.</p>
      </div>
      <div className="terms-and-privacy flex">
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>  
      </div>
    </div>
      
    </footer>
);
   
export default Footer;
