import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
//-----------------------------
const Header = () => {
 
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-gradient ">
        <div className="container">
          <Link className="navbar-brand fs-3 fw-bold" to="/">
            🌸 FloraSphere
          </Link>
          <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className=''>
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/plus">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-light btn-sm ms-2" to="/ProtectedRoute">deconection</Link>
              </li>
             
              <li className="nav-item">
                <Link className="btn btn-light btn-sm ms-2" to="/panier">🛒 Panier</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;

