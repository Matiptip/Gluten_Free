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
  const [feedbackMessage, setFeedbackMessage] = useState(''); // For user feedback

  // Store timeout ID to clear it if a new message comes in
  let feedbackTimeoutId = null;

  const clearFeedbackMessage = () => {
    if (feedbackTimeoutId) {
      clearTimeout(feedbackTimeoutId);
    }
    feedbackTimeoutId = setTimeout(() => setFeedbackMessage(''), 3000); // Clear after 3 seconds
  };

  const addToCart = (product) => {
    // Product here is the full product object from our products list, including its original stock
    // This 'product' is from the ProductList, so product.stock is the total available stock.

    const itemExistsInCart = cartItems.find(item => item.id === product.id);
    const currentQuantityInCart = itemExistsInCart ? itemExistsInCart.quantity : 0;

    if (product.stock === 0) { // Check against original stock from product list
      setFeedbackMessage(`Sorry, ${product.name} is out of stock.`);
      clearFeedbackMessage();
      console.warn(`${product.name} is out of stock. Cannot add to cart.`);
      return;
    }

    if (currentQuantityInCart >= product.stock) {
      setFeedbackMessage(`No more ${product.name} in stock to add. You have ${currentQuantityInCart}.`);
      clearFeedbackMessage();
      console.warn(`Cannot add more ${product.name} to cart. Stock limit reached.`);
      return;
    }

    setCartItems(prevItems => {
      // This logic runs after the initial stock checks
      const itemInCart = prevItems.find(item => item.id === product.id);
      if (itemInCart) {
        // Item is already in cart, and we've confirmed stock is available for increment
        setFeedbackMessage(`Added another ${product.name} to cart!`);
        clearFeedbackMessage();
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Item is not in cart, add it with quantity 1
        setFeedbackMessage(`${product.name} added to cart!`);
        clearFeedbackMessage();
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  useEffect(() => {
    console.log('Cart items updated:', cartItems);
  }, [cartItems]);

  // Simple feedback display
  const FeedbackDisplay = () => {
    if (!feedbackMessage) return null;
    return (
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0,0,0,0.8)', // Darker for better visibility
        color: 'white',
        padding: '12px 24px', // Slightly larger padding
        borderRadius: '8px', // More rounded corners
        zIndex: 1000,
        fontSize: '1rem', // Ensure good readability
        boxShadow: '0px 2px 10px rgba(0,0,0,0.2)', // Subtle shadow
      }}>
        {feedbackMessage}
      </div>
    );
  };

  return (
    <>
      <Header
        cartItems={cartItems}
        cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
      />
      <FeedbackDisplay />
      <Hero />
      <ProductList addToCart={addToCart} />
      <Features />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
