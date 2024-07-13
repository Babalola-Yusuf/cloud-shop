// src/components/Checkout.jsx
import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import PaymentSuccessModal from './PaymentSuccessModal';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

// Utility function to format numbers with commas
const formatNumber = (number) => {
  return new Intl.NumberFormat().format(number);
};

// Function to extract the numeric value from the price string
const getNumericPrice = (price) => {
  return parseFloat(price.replace(/[^\d.]/g, '')) || 0;
};


const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();  

  const totalCost = cart.reduce((total, item) => total + getNumericPrice(item.price) * item.quantity, 0);

  const handlePayment = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Header />
        <div className="checkout py-8 px-4">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>
      <h3 className="text-2xl text-gray-600 font-normal mb-2">Select your preferred payment method</h3>
      <div className='flex flex-col mt-24 lg:flex-row gap-4 justify-between items-start '>
      <div className="mb-8  ">
        <div className="mb-12">
          <label className="flex items-center mb-2">
            <input
              className="accent-purpleNormal h-8 w-8 mr-6"
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
             Card
          </label>
          <p className="ml-14">Enter the following details correctly and click <br /> 
          on <span className='font-bold'>Complete payment</span>  to pay.</p>
          {paymentMethod === 'card' && (
            <div className=" ml-14 ">
              <div>
                <p className='font-semibold text-sm text-purpleNormal mb-2'>Name on card</p>
                <input type="text" placeholder="input name" className=" block mb-2 w-64 lg:w-cardInputDesktop px-6 py-5 rounded-xl border border-productInfoBorderColor" />
              </div>
              <div>
                <p className='font-semibold text-sm text-purpleNormal mb-2'>Card number</p>
                <input type="text" placeholder="0000 0000 0000" className=" block mb-2 w-64 lg:w-cardInputDesktop px-6 py-5 rounded-xl border border-productInfoBorderColor" />
              </div>
              <div>
                <p className='font-semibold text-sm text-purpleNormal mb-2'>Expiry date</p>
                <input type="text" placeholder="mm/yy" className=" block mb-2 w-64 lg:w-cardInputDesktop px-6 py-5 rounded-xl border border-productInfoBorderColor" />
              </div>
              <div>
                <p className='font-semibold text-sm text-purpleNormal mb-2'>CVC</p>
                <input type="text" placeholder="XXX" className=" block mb-2 w-64 lg:w-cardInputDesktop px-6 py-5 rounded-xl border border-productInfoBorderColor" />
              </div>
              
            </div>
          )}
        </div>

        <div className="mb-12 ">
          <label className="mb-2 flex items-center">
            <input
              className="accent-purpleNormal h-8 w-8 mr-6 "
              type="radio"
              name="paymentMethod"
              value="bank"
              checked={paymentMethod === 'bank'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            /> Bank Transfer
          </label>
          <p className="ml-14">Transfer to the following account and click on <br /> 
          <span className='font-bold'>confirm payment</span>  to confirm transaction.</p>
          {paymentMethod === 'bank' && (
            <div className="ml-14 ">
              <div className='flex gap-7 mb-5'>
                <p className='font-normal text-xl w-bankDetailsDesktop '>Bank name </p>
                <p className='font-semibold text-2xl text-purpleNormal w-bankDetailsDesktop'>Bank name</p>
              </div>

              <div className='flex gap-7 mb-5'>
                <p className='font-normal text-xl w-bankDetailsDesktop '>Account number </p>
                <p className='font-semibold text-2xl text-purpleNormal w-bankDetailsDesktop'>123456789</p>
              </div>

              <div className='flex gap-7 mb-5'>
                <p className='font-normal text-xl w-bankDetailsDesktop '>Account name </p>
                <p className='font-semibold text-2xl text-purpleNormal w-bankDetailsDesktop'>Lizzy Celtech</p> 
              </div>
              
            </div>
          )}
        </div>

        <div className="mb-12">
          <label className="flex items-center mb-2">
            <input
              className="accent-purpleNormal h-8 w-8 mr-6"
              type="radio"
              name="paymentMethod"
              value="delivery"
              checked={paymentMethod === 'delivery'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            /> Payment on Delivery
          </label>
        </div>
      </div>
      <div className='lg:pl-28 pt-13 pb-28 lg:mr-32 border-l border-productInfoBorderColor'>
        <div className="summary md:w-96 p-4">
                <p className="font-bold text-3xl">Order Summary</p>
                <div className="mt-4 text-xl font-semibold">
                  <p className="flex justify-between">Sub Total({cart.length} items)  <span className='text-greyLight'>N {formatNumber(totalCost)}</span> </p>
                  <p className="flex justify-between">Shipping Fee <span className='text-greyLight'>N {formatNumber(1000)}</span></p>
                  <p className="mt-7 text-enterCode">Enter Code</p>
                  <div className='flex items-center bg-yellow-200'>
                    <input type="text" className="border border-gray-300 p-2 w-full h-12 text-lg" placeholder="Coupon code" />
                    <button className="bg-purpleNormal hover:bg-purpleActive text-white px-7 py-2 h-12"><img src="icons/search-white.svg" alt="" className='w-6 h-6' /></button>
                  </div>
                  <p className='text-base font-semibold flex justify-between mt-3'>Total after discount <span className='font-bold text-xl'>N {formatNumber(totalCost + 1000)}</span></p>
                  <button onClick={handlePayment} className="mt-4 bg-purpleNormal w-full hover:bg-purpleActive text-white px-4 py-2">Proceed to Checkout</button>
                </div>
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
