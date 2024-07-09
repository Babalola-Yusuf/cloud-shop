// src/components/PaymentSuccessModal.jsx
import React from 'react';

const PaymentSuccessModal = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Payment Successful</h2>
      <p>Your payment has been processed successfully!</p>
      <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Close</button>
    </div>
  </div>
);

export default PaymentSuccessModal;
