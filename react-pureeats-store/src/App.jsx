import React, { useState, useEffect } from 'react';
import './style.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  useEffect(() => {
    console.log('Cart items updated:', cartItems);
  }, [cartItems]);

  return (
    <>
      {/* Pass the full cartItems array and the total count to Header */}
      <Header
        cartItems={cartItems}
        cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
      />
      <Hero />
      <ProductList addToCart={addToCart} />
      <Features />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
