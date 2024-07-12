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
      <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className='flex flex-col md:flex-row gap-24'>
          <div className=' border-r border-gray-300'>
          {cart.map(item => (
            <div className='flex gap-4'>
              <input type="checkbox" className='hidden md:flex' />
                  <div key={item.id} className="cart-item  items-center gap-5 border-b border-gray-300 py-4 ">
                    <div className='flex items-center h-24 md:h-72 '>
                      <img src={item.image} alt={item.name} className="card-cart-summary" />
                      <div className="ml-4  flex-1 mt-10 w-96 ">
                        <h3 className="md:font-bold text-sm md:text-2xl">{item.name}</h3>
                        <p className='text-10px md:text-sm text-grey md:text-pink-700 font-semibold'>{item.category}</p>
                        <p className="font-semibold md:font-bold text-sm md:text-2xl mt-2 text-purpleNormal">{item.price}</p>
                        <p className="text-red-600 text-xs">Units Left: {item.unitsLeft}</p>
                        <div className=" hide-for-mobile flex space-x-2 items-center gap-4">
                          <button className='text-purpleNormal text-3xl font-bold bg-black-light p-2 hover:bg-purpleNormal hover:text-white' onClick={() => decreaseQuantity(item.id)}>-</button>
                          <p>{item.quantity}</p>
                          <button className='text-purpleNormal text-3xl font-bold bg-black-light p-2 hover:bg-purpleNormal hover:text-white' onClick={() => increaseQuantity(item.id)}>+</button>

                        </div>
                      </div>
                    </div>
             
              <div className='hide-for-desktop '>
              <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                Remove item
              </button>
              <div className="flex space-x-2 items-center gap-4">
                  <button className='text-purpleNormal text-3xl font-bold bg-black-light p-2 hover:bg-purpleNormal hover:text-white' onClick={() => decreaseQuantity(item.id)}>-</button>
                  <p>{item.quantity}</p>
                  <button className='text-purpleNormal text-3xl font-bold bg-black-light p-2 hover:bg-purpleNormal hover:text-white' onClick={() => increaseQuantity(item.id)}>+</button>

                </div>
                
              </div>
              
            </div>
            </div>
          
          ))}
          </div>
          <div>
            <p>Total Cost: ${totalCost.toFixed(2)}</p>
            <div className="mt-4 ">
              <p className="font-bold">Total Cost: {totalCost}</p>
              <p className="font-bold">Delivery Fee: N 1,000</p>
              <p className="font-bold">Total Amount: {totalCost + 1000}</p>
              <button onClick={() => navigate('/checkout')} className="mt-4 bg-purpleNormal text-white px-4 py-2 rounded">Proceed to Checkout</button>
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
