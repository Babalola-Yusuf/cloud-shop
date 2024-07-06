// src/components/ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const product = {
    name: "Product Name",
    ratings: "4.5/5",
    reviews: 10,
    code: "P001",
    brand: "Brand Name",
    price: "$50",
    stock: "In Stock",
    sizes: [{ size: "Small", price: "$40" }, { size: "Medium", price: "$50" }, { size: "Large", price: "$60" }],
  };

  return (
    <div className="product-details p-4">
      <div className="flex">
        <div className="product-image w-1/2 bg-gray-300">Image</div>
        <div className="product-info w-1/2 p-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="ratings mt-2">{product.ratings} ({product.reviews} reviews)</div>
          <div className="product-meta mt-2">Code: {product.code}</div>
          <div className="product-meta mt-2">Brand: {product.brand}</div>
          <div className="product-meta mt-2">Price: {product.price}</div>
          <div className="stock-status mt-2">{product.stock}</div>
          <div className="product-sizes mt-4">
            <label className="block mb-2">Size</label>
            <select className="w-full p-2 border">
              {product.sizes.map((size, index) => (
                <option key={index} value={size.size}>{size.size} - {size.price}</option>
              ))}
            </select>
          </div>
          <button className="checkout-button mt-4 p-2 bg-black text-white">Check Out</button>
        </div>
      </div>
      <div className="product-tabs mt-8">
        <div className="tab p-4 bg-gray-100">Details</div>
        <div className="tab p-4 bg-gray-100">How to Apply</div>
        <div className="tab p-4 bg-gray-100">Ingredients</div>
        <div className="tab p-4 bg-gray-100">Advanced Features</div>
        <div className="tab p-4 bg-gray-100">Specifications</div>
      </div>
    </div>
  );
};

export default ProductDetails;
