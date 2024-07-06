// src/components/ProductList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => (
  <div className="product-list grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
    {products.map((product) => (
      <Link to={`/products/${product.id}`} key={product.id} className="bg-gray-200 p-4 text-center">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </Link>
    ))}
  </div>
);

export default ProductList;
