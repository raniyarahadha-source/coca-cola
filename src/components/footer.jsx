import React from 'react';
import'../css/footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faInstagram, faYoutube, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        
       
        <div className="footer-top">
          <div className="footer-logo">
            <span className="the-text">THE</span>
            <span className="brand-name">Coca-Cola</span>
            <span className="company-text">COMPANY</span>
          </div>
          <button className="region-btn">
            <FontAwesomeIcon icon={faGlobe} className="globe-icon" />
            India | English
          </button>
        </div>

        <hr className="footer-divider" />

        {/* Middle Section: Links and Social Media */}
        <div className="footer-middle">
          <div className="links-grid">
            
            {/* Column 1 */}
            <div className="links-column">
              <h4 className="column-heading">ABOUT US</h4>
              <ul>
                <li><a href="#our-company">Our Company</a></li>
                <li><a href="#media-center">Media Center</a></li>
                <li><a href="#history">History</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#leadership">Leadership</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="links-column">
              <h4 className="column-heading">NEED HELP?</h4>
              <ul>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#sitemap">Sitemap</a></li>
                <li><a href="#contact-us">Contact Us</a></li>
              </ul>
            </div>

            {/* Column 3 - Legal Links */}
            <div className="links-column legal-column">
              <ul>
                <li><a href="#terms">Terms of Use</a></li>
                <li><a href="#privacy">Consumer Privacy Notice</a></li>
                <li><a href="#financial">Financial & Policy Documents</a></li>
                <li><a href="#supplier">Supplier Terms & Conditions – Concentrate Production Services (CPS)</a></li>
              </ul>
            </div>

          </div>

          {/* Social Icons Right Side */}
          <div className="social-icons">
            <a href="#x" className="social-circle"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="#instagram" className="social-circle"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#youtube" className="social-circle"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#facebook" className="social-circle"><FontAwesomeIcon icon={faFacebookF} /></a>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Section: Copyright */}
        <div className="footer-bottom">
          <p>© 2026 The Coca-Cola Company. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;