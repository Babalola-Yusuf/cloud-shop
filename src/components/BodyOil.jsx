// src/components/BodyOil.jsx
import React from 'react';

const products = [
  { id: 1, name: "Best Seller 1", price: "$20", image: "../product-images/product image - 1.png"  },
  { id: 2, name: "Best Seller 2", price: "$30", image: "../product-images/product image - 2.png" },
  { id: 3, name: "Best Seller 3", price: "$40", image: "../product-images/product image - 3.png" },
  { id: 4, name: "Best Seller 4", price: "$50", image: "../product-images/product image - 4.png" },
  { id: 5, name: "Best Seller 5", price: "$60", image: "../product-images/product image - 5.png" },
  { id: 6, name: "Best Seller 6", price: "$70", image: "../product-images/product image - 6.png" },
  { id: 7, name: "Best Seller 7", price: "$80", image: "../product-images/product image - 7.png" },
  { id: 8, name: "Best Seller 8", price: "$90", image: "../product-images/product image - 8.png" },
];

const BodyOil = () => (
  <div className="best-sellers py-8">
    <h2 className="text-2xl font-bold mb-4 bodyoilfont">Body Oil</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {/* Render the products here using the products array */}
      {products.map((product) => (
        <div key={product.id} className="bg-gray-200 p-4 text-center">
        <img src={product.image} alt={product.name} className="w-24 h-24 mb-4"/>   
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  </div>
);

export default BodyOil;
