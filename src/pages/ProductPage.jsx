// src/pages/ProductPage.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';

const productsData = {
  category1: [
    { id: 1, name: "Category 1 Product 1", price: "$20" },
    { id: 2, name: "Category 1 Product 2", price: "$30" },
  ],
  category2: [
    { id: 3, name: "Category 2 Product 1", price: "$40" },
    { id: 4, name: "Category 2 Product 2", price: "$50" },
  ],
  category3: [
    { id: 5, name: "Category 3 Product 1", price: "$60" },
    { id: 6, name: "Category 3 Product 2", price: "$70" },
  ],
};

const ProductPage = () => {
  const location = useLocation();
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    setCategory(category);
    setProducts(productsData[category] || []);
  }, [location]);

  return (
    <div>
      <Header />
      <div className="breadcrumb p-4 bg-gray-100">Home / Products / {category}</div>
      <div className="category-title p-4 text-2xl font-bold">{category}</div>
      <div className="flex">
        <Filters />
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default ProductPage;
