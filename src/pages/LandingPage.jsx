// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import BestSellers from '../components/BestSellers';
import NewIn from '../components/NewIn';
import ClientTestimonials from '../components/ClientTestimonials';

const LandingPage = () => (
  <div>
    <Header />
    <HeroCarousel />
    <div className="product-categories py-8">
      <h2 className="text-2xl font-bold mb-4">Product Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/products?category=category1" className="bg-gray-200 p-4 text-center">Category 1</Link>
        <Link to="/products?category=category2" className="bg-gray-200 p-4 text-center">Category 2</Link>
        <Link to="/products?category=category3" className="bg-gray-200 p-4 text-center">Category 3</Link>
      </div>
    </div>
    <BestSellers />
    <NewIn />
    <ClientTestimonials />
    <div className="pre-footer">Pre-footer Content</div>
    <footer className="bg-black-dark text-white p-4">
      <div className="address">Address & Phone Number</div>
      <div className="social-icons">Social Media Icons</div>
    </footer>
  </div>
);

export default LandingPage;
