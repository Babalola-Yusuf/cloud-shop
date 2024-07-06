// src/components/Filters.jsx
import React from 'react';

const Filters = () => (
  <div className="filters p-4 bg-gray-100">
    <h2 className="text-xl font-bold mb-4">Filters</h2>
    <div className="mb-4">
      <h3 className="font-semibold">Category</h3>
      <select className="w-full p-2 border">
        <option>Category 1</option>
        <option>Category 2</option>
        <option>Category 3</option>
      </select>
    </div>
    <div className="mb-4">
      <h3 className="font-semibold">Skin Condition</h3>
      <select className="w-full p-2 border">
        <option>Dry</option>
        <option>Oily</option>
        <option>Combination</option>
      </select>
    </div>
    <div className="mb-4">
      <h3 className="font-semibold">Featured</h3>
      <select className="w-full p-2 border">
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>
    <div className="mb-4">
      <h3 className="font-semibold">Price</h3>
      <input type="range" className="w-full" min="0" max="100" />
    </div>
  </div>
);

export default Filters;
