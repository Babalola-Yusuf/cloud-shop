// src/components/BodyOil.jsx
import React from 'react';
 import { FaStar } from 'react-icons/fa'; 

const products = [
  { id: 1, name: "Skinluxe Glow Cream XG", price: "N 76,000", image: "../product-images/product image - 1.png", supplier: " Jenny’sGlow", starReviews: 2 },
  { id: 2, name: " Skinluxe Glow Cream XG", price: "N 76,000", image: "../product-images/product image - 2.png", supplier: " Jenny’sGlow", starReviews: 4 },
  { id: 3, name: "Skinluxe Glow Cream XG", price: "N 76,000", image: "../product-images/product image - 3.png", supplier: " Jenny’sGlow", starReviews: 4 },
  { id: 4, name: "Skinluxe Glow Cream XG", price: "N 76,000", image: "../product-images/product image - 4.png", supplier: " Jenny’sGlow", starReviews: 4 },
  { id: 5, name: "Skinluxe Glow Cream XG", price: "N 76,000", image: "../product-images/product image - 5.png", supplier: " Jenny’sGlow", starReviews: 4 },
  { id: 6, name: "Skinluxe Glow Cream XG", price: "N 76,000", image: "../product-images/product image - 6.png", supplier: " Jenny’sGlow", starReviews: 4 },
  { id: 7, name: "Skinluxe Glow Cream XG", price: "N 76,000", image: "../product-images/product image - 7.png", supplier: " Jenny’sGlow", starReviews: 4 },
  { id: 8, name: "Skinluxe Glow Cream XG", price: "N 76,000", image: "../product-images/product image - 8.png", supplier: " Jenny’sGlow", starReviews: 4 },
];

const NightCream = () => (
  <div className="bodyoil py-8 flex justify-center">
   
    <div className=''>
    < h2 className="text-2xl font-bold  mb-4 bodyoilfont">Night Cream</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
      {/* Render the products here using the products array */}
      {products.map((product) => (
        <div key={product.id} className="product-card p-0 text-left relative border border-ProductCardBorderColor">
        <img src={product.image} alt={product.name} className=" product-image "/>
        <button>
          <img src="../icons/heart.svg" alt="heart" className='absolute top-4 right-3 hover:scale-125' />
        </button>   
       
        <div className="product-info ">
          <div className='border-b border-ProductInfoBorderColor'>
          <h3 className='text-purpleNormal font-bold text-xl m-4 mb-2 mt-0 '> {product.name} </h3>
          </div>
          <div className='border-b border-ProductInfoBorderColor'>
          <p className='text-lg font-bold m-4 mt-0 mb-2'>{product.price}</p>
          </div>
          
          <div className='flex justify-between p-4 pt-1 pb-2'>
          <div className='text-xs text-supplyInfoText'>
          <p className='mb-3'>Supplied by:{product.supplier}</p>
          <div className='flex items-center'>
          <div className="star-reviews flex w-24 ">
          {Array.from({ length: 5 }, (_, index) => (
              
               <FaStar
                  key={index}
                  color={index < product.starReviews ? '#FFB44C' : '#D9D9D9'}
                /> 
                
              ))}
            </div>
            <p>{product.starReviews} reviews</p>
          </div>
          </div>
          <button id='cart-btn' className="w-9 h-9 mr-3 mt-1 bg-cartBtnColor rounded-full flex justify-center items-center hover:scale-125 hover:bg-cartBtnColorHover transition duration-300 ease-in"><img src="../icons/shopping_cart.svg" alt=" shopping cart" /></button>
          </div>
        </div>
        </div>
      ))}
    </div>
    </div>
  </div>
);

export default NightCream;