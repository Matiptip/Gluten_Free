import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Shop</h3>
            <ul>
              <li><a href="#">Bakery</a></li>
              <li><a href="#">Pasta</a></li>
              <li><a href="#">Snacks</a></li>
              <li><a href="#">Flours</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>About</h3>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Certifications</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Help</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li><a href="#">hello@pureeats.com</a></li>
              <li><a href="#">1-800-GF-FOOD</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 PureEats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
