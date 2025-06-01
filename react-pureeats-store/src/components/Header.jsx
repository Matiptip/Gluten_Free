import React, { useState } from 'react';

// Accept cartItems and cartItemCount as props
function Header({ cartItems, cartItemCount }) {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  // Basic styling for the cart preview dropdown
  const cartPreviewStyles = {
    position: 'absolute',
    right: '0',
    top: '50px', // Adjust as needed based on header height
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '15px',
    zIndex: '100',
    minWidth: '250px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const cartItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #eee',
    padding: '8px 0',
    fontSize: '0.9rem',
  };

  const noItemsStyle = {
      textAlign: 'center',
      color: '#777',
  }

  return (
    <header>
      <div className="container" style={{ position: 'relative' }}> {/* Added relative positioning for dropdown */}
        <div className="logo">
          <div className="logo-circle"></div>
          <div className="logo-text">PureEats</div>
        </div>
        <div className="shopping-cart" onClick={toggleCartVisibility} style={{ cursor: 'pointer' }}>
          {/* Make sure the link itself doesn't navigate, or use a button/div for click handling */}
          <span style={{ textDecoration: 'none', color: '#333' }}>🛒 ({cartItemCount})</span>
          {isCartVisible && (
            <div className="cart-preview" style={cartPreviewStyles}>
              {cartItems.length > 0 ? (
                <>
                  <h4 style={{ margin: '0 0 10px 0', borderBottom: '1px solid #ccc', paddingBottom: '5px'}}>Your Cart</h4>
                  {cartItems.map(item => (
                    <div key={item.id} style={cartItemStyle}>
                      <span>{item.name} (x{item.quantity})</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div style={{ ...cartItemStyle, borderBottom: 'none', fontWeight: 'bold', marginTop: '10px' }}>
                    <span>Total:</span>
                    <span>${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</span>
                  </div>
                </>
              ) : (
                <p style={noItemsStyle}>Your cart is empty.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
