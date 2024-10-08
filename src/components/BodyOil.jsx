// src/components/BodyOil.jsx
import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';
import Notification from './Notification';
const products = [
  { id: 1, name: "Skinluxe Glow Cream XG", price: "N 52, 860", image: "product-images/product image - 1.png", supplier: " Jenny’sGlow", starReviews: 2, category: "Body Oil", unitsLeft: 10 },
  { id: 2, name: " Dior Prestige Le Concentre", price: "N 167, 000", image: "product-images/product image - 2.png", supplier: " Jenny’sGlow", starReviews: 4, category: "Body Oil", unitsLeft: 4 },
  { id: 3, name: "Skinluxe Manuxure Oil", price: "N 85, 000", image: "product-images/product image - 3.png", supplier: " Jenny’sGlow", starReviews: 4, category: "Body Oil", unitsLeft: 5 },
  { id: 4, name: "Sefare Mentius Oil", price: "N 88, 000", image: "product-images/product image - 4.png", supplier: " Jenny’sGlow", starReviews: 4, category: "Body Oil", unitsLeft: 3 },
  { id: 5, name: "Paleted Skin Oil ", price: "N 67, 000", image: "product-images/product image - 5.png", supplier: " Jenny’sGlow", starReviews: 4, category: "Body Oil", unitsLeft: "" },
  { id: 6, name: "Paleted Senused Oil", price: "N 76, 231", image: "product-images/product image - 6.png", supplier: " Jenny’sGlow", starReviews: 4, category: "Body Oil", unitsLeft: "" },
  { id: 7, name: "oil Spray", price: "N 73,000", image: "product-images/product image - 7.png", supplier: " Jenny’sGlow", starReviews: 4, category: "Body Oil", unitsLeft: 6 },
  { id: 8, name: "Exonented Lectus Oil", price: "N 46,000", image: "product-images/product image - 8.png", supplier: " Jenny’sGlow", starReviews: 4, category: "Body Oil", unitsLeft: 8 },
];

const ProductCard = ({ product, onAddToCart }) => {
  
  return (
    <div className="product-card p-0 text-left relative border border-ProductCardBorderColor">
      <img src={product.image} alt={product.name} className="product-image" />
      <button>
        <img src="icons/heart.svg" alt="heart" className='absolute top-4 right-3 hover:scale-125' />
      </button>   
      <div className="product-info -mt-6">
        <div className='border-b border-ProductInfoBorderColor'>
          <h3 className='text-purpleNormal font-bold text-10px md:text-xl ml-2 md:m-4 md:mb-2 mt-0'>{product.name}</h3>
        </div>
        <div className='border-b border-ProductInfoBorderColor'>
          <p className='text-sm smd:text-lg font-bold ml-2 md:m-4 mt-0 md:mb-2'>{product.price}</p>
        </div>
        <div className='flex justify-between items-center  p-4 pt-1 pb-2 '>
          <div className='text-xs text-supplyInfoText '>
            <p className=' hidden md:block mb-3'>Supplied by: {product.supplier}</p>
            <div className='flex items-center '>
              <div className="star-reviews flex w-12 md:w-24">
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar
                    key={index}
                    color={index < product.starReviews ? '#FFB44C' : '#D9D9D9'}
                  />
                ))}
              </div>
              <p className='reviews-text flex'>{product.starReviews} reviews</p>
            </div>
          </div>
          <button
            id='cart-btn'
            className="w-9 h-9 md:mr-3 mt-1 bg-cartBtnColor rounded-full flex justify-center items-center hover:scale-125 hover:bg-cartBtnColorHover transition duration-300 ease-in-out"
            onClick={() => onAddToCart(product)}
          >
            <img src="icons/shopping_cart.svg" alt="shopping cart"/>
          </button>
        </div>
      </div>
    </div>
  );
};

const BodyOil = () => {

  const { addToCart } = useContext(CartContext);
  const [notification, setNotification] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} has been added to the cart`);
    setTimeout(() => setNotification(''), 3000); // Hide notification after 3 seconds
  };
  return(
  <div className="bodyoil py-5 sm:py-8 flex justify-center" id='bodyoil'>
    <div>
      <h2 className="text-2xl font-bold mb-4 bodyoilfont">Body Oil</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 screen-x:gap-16 md:gap-5">
        {products.map(product => <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />)}
      </div>
    </div>
    {notification && (
        <Notification message={notification} />
      )}
  </div>
);
};

export default BodyOil;