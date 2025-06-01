import React from 'react';

function Reviews() {
  return (
    <section className="reviews">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="review-cards">
          <div className="review">
            <p>"Finally found gluten-free bread that actually tastes good! PureEats has changed my life."</p>
            <div className="reviewer">
              <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Sarah J." />
              <div>
                <h4>Sarah J.</h4>
                <p>Verified Buyer</p>
              </div>
            </div>
          </div>
          <div className="review">
            <p>"As someone with celiac disease, I trust PureEats completely. Never had any issues."</p>
            <div className="reviewer">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael T." />
              <div>
                <h4>Michael T.</h4>
                <p>Verified Buyer</p>
              </div>
            </div>
          </div>
          <div className="review">
            <p>"The gluten-free pasta is indistinguishable from regular pasta. Amazing quality!"</p>
            <div className="reviewer">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Jessica L." />
              <div>
                <h4>Jessica L.</h4>
                <p>Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
