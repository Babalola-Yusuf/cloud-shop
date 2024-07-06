// src/components/CheckoutContent.jsx
import React from 'react';

const CheckoutContent = () => (
  <div className="checkout-content p-4">
    <h2 className="text-2xl font-bold mb-4">Checkout</h2>
    <form>
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input type="text" className="w-full p-2 border" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Address</label>
        <input type="text" className="w-full p-2 border" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">City</label>
        <input type="text" className="w-full p-2 border" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Postal Code</label>
        <input type="text" className="w-full p-2 border" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Country</label>
        <input type="text" className="w-full p-2 border" />
      </div>
      <button type="submit" className="p-2 bg-black text-white">Place Order</button>
    </form>
  </div>
);

export default CheckoutContent;
