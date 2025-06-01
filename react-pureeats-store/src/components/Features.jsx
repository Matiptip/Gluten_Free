import React from 'react';

function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Why Choose PureEats</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">🌾</div>
            <h3>Certified GF</h3>
            <p>All products meet strict gluten-free certification standards</p>
          </div>
          <div className="feature">
            <div className="feature-icon">👩‍🍳</div>
            <h3>Chef-Crafted</h3>
            <p>Recipes developed by professional chefs for maximum flavor</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Get your gluten-free favorites delivered to your door</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
