// src/components/Checkout.jsx
import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import PaymentSuccessModal from './PaymentSuccessModal';
import Header from './Header';
import Footer from './Footer';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showModal, setShowModal] = useState(false);

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePayment = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Header />
        <div className="checkout py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Preferred Payment Selection</h3>
        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            /> Card
          </label>
          {paymentMethod === 'card' && (
            <div className="pl-4">
              <input type="text" placeholder="Card Number" className="block mb-2" />
              <input type="text" placeholder="Expiry Date" className="block mb-2" />
              <input type="text" placeholder="CVV" className="block mb-2" />
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="radio"
              name="paymentMethod"
              value="bank"
              checked={paymentMethod === 'bank'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            /> Bank Transfer
          </label>
          {paymentMethod === 'bank' && (
            <div className="pl-4">
              <p>Account Name: XYZ</p>
              <p>Account Number: 123456789</p>
              <p>Bank: ABC Bank</p>
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="radio"
              name="paymentMethod"
              value="delivery"
              checked={paymentMethod === 'delivery'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            /> Payment on Delivery
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">Order Summary</h3>
        <div>
          {cart.map(item => (
            <div key={item.id} className="flex items-center border-b border-gray-300 py-4">
              <img src={item.image} alt={item.name} className="w-16 h-16" />
              <div className="ml-4 flex-1">
                <h4 className="font-bold">{item.name}</h4>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="font-bold">Total Cost: {totalCost}</p>
            <p className="font-bold">Delivery Fee: N 1,000</p>
            <p className="font-bold">Total Amount: {totalCost + 1000}</p>
            <button onClick={handlePayment} className="mt-4 bg-purpleNormal text-white px-4 py-2 rounded">Pay Now</button>
          </div>
        </div>
      </div>

      {showModal && <PaymentSuccessModal onClose={() => setShowModal(false)} />}
    </div>

    <Footer />
    </div>
      );
};

export default Checkout;
