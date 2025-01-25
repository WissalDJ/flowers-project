import React from 'react';
import { FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa'; 
import '../styles/Footer.css';
const Footer = () => {
  return (
    <footer className="footer bg-light pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="navbar-brand fs-3 fw-bold">FloraSphere</h5>
            <p className="text-muted">
              Bringing nature's beauty to your doorstep. Fresh flowers for every occasion.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-muted">About Us</a></li>
              <li><a href="/plus" className="text-muted">Shop</a></li>
              <li><a href="/privacy" className="text-muted">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="https://instagram.com" className="text-muted"><FaInstagram size={24} /></a>
              </li>
              <li className="me-3">
                <a href="https://facebook.com" className="text-muted"><FaFacebook size={24} /></a>
              </li>
              <li>
                <a href="https://pinterest.com" className="text-muted"><FaPinterest size={24} /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-muted mb-0">
            &copy; {new Date().getFullYear()} Fleuriste. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;