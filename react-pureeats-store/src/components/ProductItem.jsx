import React from 'react';

// ProductItem component receives 'product' object and 'addToCart' function as props
function ProductItem({ product, addToCart }) {
  const { id, name, price, stock, description, imageSrc } = product; // Destructure product properties

  const isOutOfStock = stock === 0;

  // Basic styling for the product item elements
  const itemStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    margin: '10px 0', // Changed from margin: '10px' to avoid horizontal margin if grid handles it
    textAlign: 'center',
    borderRadius: '8px',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%' // Ensure items in a row take up same height
  };

  const imageStyle = {
    width: '100%',
    maxHeight: '200px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginBottom: '15px'
  };

  const nameStyle = {
    fontSize: '1.3rem', // Slightly reduced from 1.5rem
    marginBottom: '10px',
    color: '#333',
    fontWeight: 'bold' // Added font-weight
  };

  const descriptionStyle = {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '10px',
    flexGrow: 1 // Allow description to take available space
  };

  const priceStyle = {
    fontSize: '1.1rem', // Slightly increased
    fontWeight: 'bold', // Added font-weight
    color: '#007bff', // Changed color
    marginBottom: '10px'
  };

  const stockStyle = {
    fontSize: '0.9rem',
    color: isOutOfStock ? '#dc3545' : '#28a745', // Red if out, green if in stock
    marginBottom: '15px',
    fontWeight: 'bold'
  };

  const buttonStyle = {
    backgroundColor: isOutOfStock ? '#6c757d' : '#007bff', // Grey if out, blue if in stock
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: isOutOfStock ? 'not-allowed' : 'pointer',
    fontWeight: 'normal', // Reset from .btn if it was too bold
    opacity: isOutOfStock ? 0.7 : 1,
    width: '100%' // Make button full width of its container
  };


  return (
    <div className="product-item" style={itemStyle}>
      <div> {/* Top part of the card */}
        <img src={imageSrc} alt={name} style={imageStyle} />
        <h3 style={nameStyle}>{name}</h3>
        <p style={descriptionStyle}>{description}</p>
        <p style={priceStyle}>${price.toFixed(2)}</p>
        <p style={stockStyle}>Stock: {stock > 0 ? stock : 'Out of Stock'}</p>
      </div>
      <div> {/* Bottom part of the card, for the button */}
        <button
          onClick={() => !isOutOfStock && addToCart(product)}
          disabled={isOutOfStock}
          style={buttonStyle}
          className={!isOutOfStock ? "btn" : ""} // Apply .btn class only if not out of stock
        >
          {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
