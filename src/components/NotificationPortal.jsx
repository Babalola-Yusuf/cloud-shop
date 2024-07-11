// src/components/NotificationPortal.jsx
import React from 'react';
import ReactDOM from 'react-dom';

const NotificationPortal = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById('notification-root')
  );
};

export default NotificationPortal;
