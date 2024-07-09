// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './contexts/CartContext';

const App = () => (
  <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  </CartProvider>
);

export default App;
