// src/components/HeroCarousel.jsx
import React from 'react';
import { useState, useEffect } from 'react';

const slides = [
  { id: 1, title: "Slide 1", description: "This is the first slide" },
  { id: 2, title: "Slide 2", description: "This is the second slide" },
  { id: 3, title: "Slide 3", description: "This is the third slide" },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="bg-cover bg-center w-full h-full flex items-center justify-center bg-gray-300">
            <h2 className="text-white text-4xl">{slide.title}</h2>
            <p className="text-white">{slide.description}</p>
          </div>
        </div>
      ))}
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 bg-black bg-opacity-50">Prev</button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 bg-black bg-opacity-50">Next</button>
    </div>
  );
};

export default HeroCarousel;
