//App.jsx

// App.jsx

import React, { useState } from "react";
import Products from "./components/Products";
import Heading from "./Heading";
import Search from "./Search";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Check if user is logged in (JWT token is in localStorage)
  const isLoggedIn = !!localStorage.getItem('token');

  const addToCart = (product) => {
    if (isLoggedIn) {
      setCart([...cart, product]);
    } else {
      alert("Please log in to add items to the cart.");
    }
  };

  return (
    <>
      <Heading cart={cart} />
      <Search setSearchTerm={setSearchTerm} />
      <Products addToCart={addToCart} searchTerm={searchTerm} />
    </>
  );
};

export default App;

