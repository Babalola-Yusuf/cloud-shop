// src/components/HeroCarousel.jsx
import React from 'react';

const HeroCarousel = () => {

  return (
    <div className="relative w-full h-96 overflow-hidden bg-green-200">
      <p>gooo</p>
        <div className={`absolute w-full h-full`}>
          <div className="bg-cover bg-center w-full h-full flex items-center justify-center bg-gray-300">
            <h2 className="text-white text-4xl">title</h2>
            <p className="text-white">description</p>
          </div>
        </div>
    </div>
  );
};

export default HeroCarousel;
