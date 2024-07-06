// src/pages/ProductDescriptionPage.jsx
import React from 'react';
import Header from '../components/Header';
import ProductDetails from '../components/ProductDetails';

const ProductDescriptionPage = () => (
  <div>
    <Header />
    <div className="breadcrumb p-4 bg-gray-100">Home / Products / Product Name</div>
    <ProductDetails />
  </div>
);

export default ProductDescriptionPage;
