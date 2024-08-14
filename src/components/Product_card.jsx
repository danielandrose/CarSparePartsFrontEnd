
import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../redux/counterSlice'; // Ensure this path is correct
import { addToCart } from '../redux/cartSlice'; // Ensure this path is correct
import './ProductCard.css'
const Product_card = ({ product }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(1));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img className="product-cardImage" src={product.image} alt={product.title} />
      <h2 className="product-cardHead">{product.title}</h2>
      <p className="product-cardPara">{product.description}</p>
      <p className="product-cardPrice">Price : ${product.price}</p>
      <button onClick={handleAddToCart} className="product-cardAddToCartButton">Add to Cart</button>
    </div>
  );
};

export default Product_card;
