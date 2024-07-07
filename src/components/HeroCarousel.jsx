// src/components/HeroCarousel.jsx
import React from 'react';

const HeroCarousel = () => {

  return (
    <div className="relative w-full h-96 overflow-hidden bg-green-200">
        <div className={`absolute w-full h-full `}>
          <div className="bg-cover bg-center w-full h-full flex items-center justify-center bg-gray-300 hero">
            <div className='carousel-words flex flex-col items-center'>
            <h2 className="text-white text-5xl font-bold text-center ">unlock your natural glow </h2>
            <p className="text-white text-md text-center mt-2">Discover the power of your skin with Skinluxe. Our natural skincare products are <br /> meticulously crafted with botanical extracts and nourishing oils to enhance your skin’s natural radiance</p>
            </div>
            
          </div>
        </div>
    </div>
  );
};

export default HeroCarousel;
