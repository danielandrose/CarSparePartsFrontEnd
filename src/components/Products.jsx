

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import axios from '../axiosConfig';
import "./ProductCard.css"
import "./Product.css"

const Products = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/products');
                setProducts(response.data);
            } catch (err) {
                console.error('Failed to fetch products:', err);
            }
        };
        fetchProducts();
    }, []);

    const handleAddToCart = async (product) => {
        if (!token) {
            alert('Please login to add products to the cart.');
            return;
        }

        try {
            const response = await axios.post('/cart', { product_id: product.id, quantity: 1 }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                dispatch(addToCart({ ...product, quantity: 1 }));
                alert('Product added to cart!');
            }
        } catch (err) {
            console.error('Failed to add product to cart:', err);
            alert('Failed to add product to cart.');
        }
    };

    return (
        <div className="product-list">
            {products.map(product => (
                <div className="product-card" key={product.id}>
                    <img className="product-cardImage" src={product.image} />
                    <h3 className="product-cardHead">{product.title}</h3>
                    
                    <p className="product-cardPara">{product.description}</p>
                    <button className="product-cardAddToCartButton"
                        onClick={() => handleAddToCart(product)}
                        disabled={!token}>
                        Add to Cart
                    </button>
                </div>
                
            ))}
        </div>
    );
};

export default Products;
