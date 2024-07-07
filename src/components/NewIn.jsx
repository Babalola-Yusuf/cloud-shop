// src/components/NewIn.jsx
import React, { useState } from 'react';

const newProducts = [
  { id: 1, name: "New Product 1", price: "$25", image: "../product-images/product image - 1.png" },
  { id: 2, name: "New Product 2", price: "$35", image: "../product-images/product image - 2.png" },
  { id: 3, name: "New Product 3", price: "$45", image: "../product-images/product image - 3.png" },
  { id: 4, name: "New Product 4", price: "$55", image: "../product-images/product image - 4.png" },
];

const NewIn = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newProducts.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newProducts.length) % newProducts.length);
  };

  return (
    <div className="new-in py-8">
      <h2 className="text-2xl font-bold mb-4">New In</h2>
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
           {/* Render the products here using the products array */}
      {newProducts && newProducts.map((product) => (
        <div key={product.id} className="bg-gray-200 p-4 text-center">
        <img src={product.image} alt={product.name} className="w-24 h-24 mb-4"/>   
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
        </div>
        <button onClick={prevProduct} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 bg-black bg-opacity-50">Prev</button>
        <button onClick={nextProduct} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 bg-black bg-opacity-50">Next</button>
      </div>
    </div>
  );
};

export default NewIn;
