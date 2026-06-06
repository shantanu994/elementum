import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__arrow">
        <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10 Q30 5, 40 30 Q50 55, 30 65" stroke="#e8533a" strokeWidth="2.5" fill="none" />
          <path d="M55 10 Q75 5, 85 30 Q95 55, 75 65" stroke="#e8533a" strokeWidth="2.5" fill="none" />
          <polyline points="22,60 30,68 38,60" stroke="#e8533a" strokeWidth="2.5" fill="none" />
          <polyline points="67,60 75,68 83,60" stroke="#e8533a" strokeWidth="2.5" fill="none" />
        </svg>
      </div>

      <h2 className="newsletter__heading">
        Subscribe to
        <br />
        our newsletter
      </h2>
      <p className="newsletter__sub">To make your stay special and even more memorable</p>

      <a href="#footer" className="newsletter__btn">Subscribe Now</a>

      <div className="newsletter__purple-shape" />
    </section>
  );
};

export default Newsletter;
