import React from 'react';
import ProductItem from './ProductItem';

// ProductList component receives 'addToCart' function as a prop
function ProductList({ addToCart }) {
  // Dummy product data
  const products = [
    { id: 1, name: 'Gluten-Free Bread Loaf', price: 5.99 },
    { id: 2, name: 'Artisan GF Pasta (Penne)', price: 4.50 },
    { id: 3, name: 'Organic GF Cookies (12-pack)', price: 7.25 },
  ];

  return (
    <section className="product-list-section" style={{ padding: '40px 0', backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '30px' }}>Our Products</h2>
        <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {products.map(product => (
            <ProductItem key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
