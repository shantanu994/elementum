import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__divider" />
      <div className="footer__grid">
        <div className="footer__col">
          <h4 className="footer__col-title">Company</h4>
          {['Home', 'Studio', 'Service', 'Blog'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="footer__link">{item}</a>
          ))}
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Terms &amp; Policies</h4>
          {['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'].map((item) => (
            <a key={item} href="#" className="footer__link">{item}</a>
          ))}
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Follow Us</h4>
          {['Instagram', 'LinkedIn', 'Youtube', 'Twitter'].map((item) => (
            <a key={item} href="#" className="footer__link">{item}</a>
          ))}
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Terms &amp; Policies</h4>
          <p className="footer__address">1498w Fluton ste, STE<br />2D Chicago, IL 63867.</p>
          <p className="footer__address">(123) 456789000</p>
          <p className="footer__address">info@elementum.com</p>
        </div>
      </div>

      <p className="footer__copy">©2023 Elementum. All rights reserved</p>
    </footer>
  );
};

export default Footer;
