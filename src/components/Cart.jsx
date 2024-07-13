// src/components/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
        <Header/>
    <div className="cart py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">CART SUMMARY</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='flex flex-col md:flex-row gap-24'>
          <div className='  border-gray-300 '>
          {cart.map(item => (
            <div className='flex gap-4  pl-2.5 border md:border-l-0 md:border-t-0 border-ProductCardBorderColor'>
              <input type="checkbox" className='hidden md:flex' />
                  <div key={item.id} className="cart-item  items-center gap-5 border-gray-300 py-4  ">
                    <div className='flex items-center h-24 md:h-72   '>
                      <img src={item.image} alt={item.name} className="card-cart-summary" />
                      <div className="ml-4  flex-1 md:mt-0 h-24 md:min-h-48 w-96  box-border">
                        <h3 className="font-normal md:font-bold text-sm md:text-2xl leading-5 md:leading-9">{item.name}</h3>
                        <p className='text-10px md:text-sm text-grey md:text-pink-700 font-semibold leading-3 md:mb-6 mt-0.5'>{item.category}</p>
                        <p className="font-semibold md:font-bold text-sm md:text-2xl mt-2 text-purpleNormal">{item.price}</p>
                        <p className="text-red-600 text-xs mb-6"> {item.unitsLeft} units left</p>

                        <div className=" hide-for-mobile flex space-x-2 items-center gap-4 ">
                          <button className='text-white h-10 flex items-center text-3xl font-bold bg-purpleNormal p-2 hover:bg-purpleActive hover:text-white' onClick={() => decreaseQuantity(item.id)}>-</button>
                          <p>{item.quantity}</p>
                          <button className='text-white h-10 flex items-center text-3xl font-bold bg-purpleNormal p-2 hover:bg-purpleActive hover:text-white' onClick={() => increaseQuantity(item.id)}>+</button>

                        </div>
                      </div>
                    </div>
             
              <div className='hide-for-desktop justify-between items-center mr-7 '>
              <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-purpleActive flex items-center gap-2 text-10px font-bold leading-4"
                >
                <img src="icons/delete.svg" alt="delete"  />
                Remove item
              </button>
              <div className="flex space-x-2 items-center gap-4 ">
                  <button className='text-white text-sm md:text-3xl font-bold bg-purpleNormal w-7 h-5 p-2.5 flex items-center justify-center hover:bg-purpleActive hover:text-white' onClick={() => decreaseQuantity(item.id)}>-</button>
                  <p className='text-xs'>{item.quantity}</p>
                  <button className='text-white text-sm md:text-3xl font-bold bg-purpleNormal w-7 h-5 p-2.5 flex items-center justify-center hover:bg-purpleActive hover:text-white' onClick={() => increaseQuantity(item.id)}>+</button>

                </div>
                
              </div>
              
            </div>
            </div>
          
          ))}
          </div>
          <div className="summary md:w-96 p-4">
            <p className="font-bold text-3xl">Order Summary</p>
            <div className="mt-4 text-xl font-semibold">
              <p className="flex justify-between">Sub Total({cart.length} items)  <span className='text-greyLight'>{totalCost}</span> </p>
              <p className=" flex justify-between">Shipping Fee <span className='text-greyLight'>N 1,000</span></p>
              <p className="mt-7 text-enterCode">Enter Code</p>
              <div className='flex  items-center bg-yellow-200'>
              <input type="text" className="border border-gray-300 p-2 w-full h-12 text-lg" placeholder="Coupon code" />
              <button className=" bg-purpleNormal hover:bg-purpleActive text-white px-7 py-2 h-12"><img src="icons/search-white.svg" alt="" className='w-6 h-6' /></button> 
              </div>
              <p className='text-base font-semibold flex justify-between mt-3 '>Total after discount <span className='font-bold text-xl'>N 222,740</span></p>
              
              <button onClick={() => navigate('/checkout')} className="mt-4 bg-purpleNormal w-full hover:bg-purpleActive text-white px-4 py-2 ">Proceed to Checkout</button>
            </div>
          </div>
          
        </div>
      )}
    </div>
      <Footer/>
    </div>
      );
};

export default Cart;
