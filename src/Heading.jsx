import React from 'react';
import './Heading.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Heading = () => {
  const cart = useSelector((state) => state.cart); // Use Redux state
  const navigate = useNavigate();

  // Calculating total items and price
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Navigation functions
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='nav-container'>
      <ul className="container">
        <img className="logo" src="https://i.pinimg.com/736x/46/43/24/464324ca2663306ad3f671aa6992a7ff.jpg" alt="logo" />
        <li onClick={() => handleNavigation('/')}>Home</li>
        <li onClick={() => handleNavigation('/About')}>About</li>
        <li onClick={() => handleNavigation('/ContactPage')}>Contacts</li>
        <li onClick={() => handleNavigation('/CartPage')}>Cart: {totalItems}</li> {/* Display total items */}
        <li onClick={() => handleNavigation('/Login')}>Login</li>
        <li onClick={() => handleNavigation('/Register')}>Register</li>
        <li onClick={() => handleNavigation('/BookAService')}>Book a Service</li>
      </ul>
    </div>
  );
};

export default Heading;
