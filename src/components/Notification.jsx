// src/components/Notification.jsx
import React from 'react';
import NotificationPortal from './NotificationPortal';

const Notification = ({ message, onClose }) => (
  <NotificationPortal>
    <div className="fixed flex gap-1.5 items-center top-4 right-4 bg-white  p-4 rounded shadow-lg"> 
      
      <img src="icons/check.svg " alt="check" className='bg-green-500 p-1 rounded-full'/>
      <p className='text-sm'>{message}</p>
      {/* <button onClick={onClose} className="mt-2 text-sm underline">
        Close
      </button> */}
    </div>
  </NotificationPortal>
);

export default Notification;
