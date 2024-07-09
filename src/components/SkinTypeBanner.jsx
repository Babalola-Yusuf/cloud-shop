// src/components/HeroCarousel.jsx
import React from 'react';

const SkinTypeBanner = () => {

  return (
    <div className="skin-type-banner w-full relative ">
      <img src="images/cosmetic-male-beauty-products-with-display 1.png" alt=""  className=" object-cover absolute h-full"/>
      <div className='overlay  absolute w-full h-full '>
      <div className='text-container w-1/2 h-full'>
        <h2 className="text-white font-bold text-7xl md:text-8xl h-full">Preserve Your Glow, Embrace Your Hue</h2>
      </div>
      </div>
        
    </div>
  );
};

export default SkinTypeBanner;
