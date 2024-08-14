import React, { useState } from 'react';
import './BookAService.css';

function BookAService() {
  const [serviceType, setServiceType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleServiceChange = (event) => {
    setServiceType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
    console.log({
      serviceType,
      name,
      email,
      date,
    });
  };

  return (
    <div className="container1">
      <h1>Book a Service</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Service Type:
            <select value={serviceType} onChange={handleServiceChange}>
              <option value="">Select a service</option>
              <option value="car-wash">Car Wash</option>
              <option value="general-service">General Service</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </label>
        </div>
        <div>
          <label>
            Preferred Date:
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookAService;
