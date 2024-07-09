// src/components/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart py-8">
      <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item flex items-center border-b border-gray-300 py-4">
              <img src={item.image} alt={item.name} className="w-16 h-16" />
              <div className="ml-4 flex-1">
                <h3 className="font-bold">{item.name}</h3>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="flex space-x-2">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <p className="font-bold">Total Cost: {totalCost}</p>
            <p className="font-bold">Delivery Fee: N 1,000</p>
            <p className="font-bold">Total Amount: {totalCost + 1000}</p>
            <button onClick={() => navigate('/checkout')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
