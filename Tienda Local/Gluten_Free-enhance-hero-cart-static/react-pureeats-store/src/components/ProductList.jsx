import React from 'react';
import ProductItem from './ProductItem';

// ProductList component receives 'addToCart' function as a prop
function ProductList({ addToCart }) {
  // Dummy product data with enhanced structure
  const products = [
    {
      id: 1,
      name: 'Gluten-Free Sourdough Loaf',
      price: 7.99,
      stock: 15,
      description: 'Artisan baked sourdough, perfect for sandwiches or toast. Naturally gluten-free.',
      imageSrc: 'https://via.placeholder.com/300x200.png?text=GF+Sourdough'
    },
    {
      id: 2,
      name: 'Organic GF Penne Pasta (500g)',
      price: 4.75,
      stock: 30,
      description: 'Made from the finest organic brown rice flour. Holds sauce beautifully.',
      imageSrc: 'https://via.placeholder.com/300x200.png?text=GF+Penne+Pasta'
    },
    {
      id: 3,
      name: 'Assorted GF Cookies (12-pack)',
      price: 9.50,
      stock: 22,
      description: 'A delicious assortment of chocolate chip, oatmeal raisin, and double chocolate cookies.',
      imageSrc: 'https://via.placeholder.com/300x200.png?text=GF+Cookie+Pack'
    },
    {
      id: 4,
      name: 'Premium GF All-Purpose Flour (1kg)',
      price: 12.00,
      stock: 0, // Out of stock example
      description: 'Our special blend for all your baking needs. Cups 1-to-1 with regular flour.',
      imageSrc: 'https://via.placeholder.com/300x200.png?text=GF+AP+Flour'
    },
    {
      id: 5,
      name: 'Gluten-Free Pizza Base (2-pack)',
      price: 6.20,
      stock: 10,
      description: 'Crispy and delicious pizza bases ready for your favorite toppings.',
      imageSrc: 'https://via.placeholder.com/300x200.png?text=GF+Pizza+Base'
    }
  ];

  return (
    <section className="product-list-section" style={{ padding: '40px 0', backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '30px' }}>Our Products</h2>
        <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          {products.map(product => (
            // Pass the whole product object to ProductItem
            <ProductItem key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
