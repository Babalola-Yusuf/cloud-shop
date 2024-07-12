// src/components/HeroCarousel.jsx
import React from 'react';

const SkinTypeBanner = () => {

  return (
    <div className="skin-type-banner w-full relative ">
      <img src="images/cosmetic-male-beauty-products-with-display.png" alt=""  className=" object-cover absolute h-full"/>
      <div className='overlay  absolute w-full h-full '>
      <div className='text-container h-full'>
        <h2 className="skin-type-text text-white font-bold text-6xl  h-full ">Preserve <br /> Your <br /> Glow, <br /> Embrace <br />Your Hue</h2>
      </div>
      </div>
        
    </div>
  );
};

export default SkinTypeBanner;
