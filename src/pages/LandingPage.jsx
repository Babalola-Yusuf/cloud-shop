// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import BodyOil from '../components/BodyOil';
import NewIn from '../components/NewIn';
import ClientTestimonials from '../components/ClientTestimonials';
import SkinTypeBanner from '../components/SkinTypeBanner';

const LandingPage = () => (
  <div>
    <Header />
    <HeroCarousel />
    <div className='flex justify-center items-center'>
    <div className="product-categories py-8">
      <div className='text-center'>
        <p className='text-2xl font-semibold text-purpleNormal'>Products</p>
        <h2 className="text-5xl font-bold mb-4 ">Glow in Abundance</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/products?category=category1" className=" p-0 text-center w-64 h-96 hover:border hover:border-gold-normalHover transition duration-3000ms ease-in ">
          <div className='flex flex-col justify-between gap-4 w-full h-full'>
            <img src="../images/skincare image.png" alt="category 1" />
            <p className="mb-4">Men Skin Care</p>
          </div>
        </Link>
        <Link to="/products?category=category2" className=" p-0 text-center w-64 h-96 hover:border hover:border-gold-normalHover transition duration-3000ms ease-in">
          <div className='flex flex-col justify-between gap-4 w-full h-full'>
            <img src="../images/skincare image.png" alt="category 2" />
            <p className="mb-4">Women Skin Care</p>
          </div>
        </Link>

        <Link to="/products?category=category3" className=" p-0 text-center w-64 h-96 hover:border hover:border-gold-normalHover transition duration-3000ms ease-in">
          <div className='flex flex-col justify-between gap-4 w-full h-full'>
            <img src="../images/skincare image.png" alt="category 3" />
            <p className="mb-4">Kids Skin Care</p>
          </div>
        </Link>
      </div>
    </div>
    </div>
    
    <BodyOil />
    <NewIn />
    <SkinTypeBanner />
    <ClientTestimonials />
    <div className="pre-footer">Pre-footer Content</div>
    <footer className="bg-black-dark text-white p-4">
      <div className="address">Address & Phone Number</div>
      <div className="social-icons">Social Media Icons</div>
    </footer>
  </div>
);

export default LandingPage;
