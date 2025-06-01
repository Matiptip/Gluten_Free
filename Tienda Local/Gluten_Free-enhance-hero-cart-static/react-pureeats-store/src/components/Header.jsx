import React, { useState } from 'react';

// Accept cartItems and cartItemCount as props
function Header({ cartItems, cartItemCount }) {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = (e) => {
    e.preventDefault(); // Prevent default link navigation if a real link is used
    setIsCartVisible(!isCartVisible);
  };

  // Basic styling for the cart preview dropdown
  const cartPreviewStyles = {
    position: 'absolute',
    right: '0',
    top: '60px', // Adjusted for potentially taller header or more space
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '15px',
    zIndex: '1000', // Ensure it's on top
    minWidth: '300px', // Increased min-width for images
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)', // Slightly enhanced shadow
  };

  const cartItemStyle = {
    display: 'flex',
    alignItems: 'center', // Align items vertically
    borderBottom: '1px solid #eee',
    padding: '10px 0', // Increased padding
    fontSize: '0.9rem',
  };

  const cartItemImageStyle = {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginRight: '10px',
  };

  const cartItemDetailsStyle = {
    flexGrow: 1, // Allow details to take up remaining space
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // Align items in this flex container as well
  };

  const cartItemNameQtyStyle = {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left', // Ensure text aligns left
  };

  const noItemsStyle = {
      textAlign: 'center',
      color: '#777',
      padding: '10px 0',
  };

  const totalStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    marginTop: '10px',
    paddingTop: '10px',
    borderTop: '1px solid #ccc',
  };

  const headerTitleStyle = {
    margin: '0 0 10px 0',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px', // Increased padding
    fontSize: '1.1rem', // Slightly larger title
    textAlign: 'center', // Center title
  };


  return (
    <header>
      <div className="container" style={{ position: 'relative' }}>
        <div className="logo">
          <div className="logo-circle"></div>
          <div className="logo-text">PureEats</div>
        </div>
        {/* Use a div or button for click handling for better accessibility/semantics than a lone a# */}
        <div
          className="shopping-cart"
          onClick={toggleCartVisibility}
          style={{ cursor: 'pointer', userSelect: 'none' }} // userSelect: 'none' for better click experience
          role="button" // Accessibility: indicate it's clickable
          tabIndex={0} // Accessibility: make it focusable
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleCartVisibility(e); }} // Accessibility: keyboard interaction
        >
          🛒 ({cartItemCount})
          {isCartVisible && (
            <div className="cart-preview" style={cartPreviewStyles}>
              <h4 style={headerTitleStyle}>Your Cart</h4>
              {cartItems.length > 0 ? (
                <>
                  {cartItems.map(item => (
                    <div key={item.id} style={cartItemStyle}>
                      <img src={item.imageSrc} alt={item.name} style={cartItemImageStyle} />
                      <div style={cartItemDetailsStyle}>
                        <div style={cartItemNameQtyStyle}>
                          <span>{item.name}</span>
                          <small>Qty: {item.quantity}</small>
                        </div>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                  <div style={totalStyle}>
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
