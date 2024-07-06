// src/components/CartContent.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const cartItems = [
  { id: 1, name: "Product 1", price: "$20", quantity: 2 },
  { id: 2, name: "Product 2", price: "$30", quantity: 1 },
];

const CartContent = () => (
  <div className="cart-content p-4">
    <h2 className="text-2xl font-bold mb-4">Cart</h2>
    <table className="w-full bg-gray-100">
      <thead>
        <tr>
          <th className="p-2">Product</th>
          <th className="p-2">Price</th>
          <th className="p-2">Quantity</th>
          <th className="p-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td className="p-2">{item.name}</td>
            <td className="p-2">{item.price}</td>
            <td className="p-2">{item.quantity}</td>
            <td className="p-2">${item.price.replace('$', '') * item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <Link to="/checkout" className="checkout-button mt-4 p-2 bg-black text-white">Proceed to Check Out</Link>
  </div>
);

export default CartContent;
