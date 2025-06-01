import React from 'react';

// ProductItem component receives 'product' object and 'addToCart' function as props
function ProductItem({ product, addToCart }) {
  return (
    <div className="product-item" style={{ border: '1px solid #eee', padding: '20px', margin: '10px', textAlign: 'center', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#333' }}>{product.name}</h3>
      {/* In a real app, you'd have more product details like image, price, description */}
      <p style={{ marginBottom: '15px', color: '#666' }}>Price: ${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="btn"
        style={{ backgroundColor: '#28a745', color: 'white', fontWeight: 'normal' }} // Overriding some .btn styles for this specific button
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
