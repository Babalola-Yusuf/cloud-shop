// src/pages/LandingPage.jsx
import React from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import BodyOil from '../components/BodyOil';
import NewIn from '../components/Natural';
import SkinTypeBanner from '../components/SkinTypeBanner';
import Moisturizer from '../components/Moisturizer';
import FaceOil from '../components/FaceOil';
import NightCream from '../components/NightCream';
import Footer from '../components/Footer';

const LandingPage = () => (
  <div className='bg-pageBackground'>
    <Header />
    <HeroCarousel />
    <div className='flex justify-center items-center mt-20'>
      <div className='text-center p-2'>
        <p className='text-4xl font-semibold text-purpleNormal mb-2'>Shop Our Products</p>
        <h2 className="text-5xl font-bold mb-4">Glow in Abundance</h2>
      </div>
    </div>
    <BodyOil />
    <NewIn />
    <SkinTypeBanner />
    <Moisturizer />
    <FaceOil />
    <NightCream />
    <Footer />
  </div>
);

export default LandingPage;
