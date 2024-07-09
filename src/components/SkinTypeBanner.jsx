// src/components/HeroCarousel.jsx
import React from 'react';

const SkinTypeBanner = () => {

  return (
    <div className="skin-type-banner w-full relative ">
      <img src="/images/cosmetic-male-beauty-products-with-display 1.png" alt=""  className=" object-cover absolute"/>
      <div className='overlay  absolute w-full  '>
      <div className='text-container opacity-100 '>
        <h2 className="text-white font-bold">Preserve Your Glow, Embrace Your Hue</h2>
      </div>
      </div>
        
    </div>
  );
};

export default SkinTypeBanner;
