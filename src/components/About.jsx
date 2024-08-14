
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container1">
      <h1 className="header">About Us</h1>
      <div className="text">
        <p>
          Welcome to Car Spares and Services, your trusted online destination for high-quality car spares and top-notch car services. Our mission is to provide car owners with a reliable source for all their automotive needs, whether it's finding the right spare parts or getting expert service.
        </p>
      </div>
      <div className="section">
        <h2 className="section-title">Our Story</h2>
        <p className="section-text">
          Established in 2005, Car Spares and Services was founded with the goal of simplifying the process of maintaining and repairing vehicles. We understand the challenges car owners face when it comes to finding the right parts and services, which is why we strive to offer a seamless and user-friendly experience.
        </p>
      </div>
      <div className="section">
        <h2 className="section-title">Our Services</h2>
        <p className="section-text">
          We offer a wide range of services, including:
        </p>
        <ul className="section-text">
          <li>Comprehensive inventory of car spare parts</li>
          <li>Expert car servicing and maintenance</li>
          <li>Reliable customer support</li>
          <li>Fast and secure delivery</li>
        </ul>
      </div>
      <div className="section">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-text">
          At Car Spares and Services we pride ourselves on our commitment to quality and customer satisfaction. Our team of experienced professionals is dedicated to helping you keep your car in top condition, ensuring you can drive with confidence and peace of mind.
        </p>
      </div>
    </div>
  );
};

export default About;
