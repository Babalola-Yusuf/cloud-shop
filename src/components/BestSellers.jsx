// src/components/BestSellers.jsx
import React from 'react';

const products = [
  { id: 1, name: "Best Seller 1", price: "$20" },
  { id: 2, name: "Best Seller 2", price: "$30" },
  { id: 3, name: "Best Seller 3", price: "$40" },
];

const BestSellers = () => (
  <div className="best-sellers py-8">
    <h2 className="text-2xl font-bold mb-4">Our Best Sellers</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-gray-200 p-4 text-center">
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  </div>
);

export default BestSellers;
