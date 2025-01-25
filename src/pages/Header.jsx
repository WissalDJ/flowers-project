import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions';
import '../styles/Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logoutUser()); 
    navigate('/login'); 
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-gradient">
        <div className="container">
          <Link className="navbar-brand fs-3 fw-bold" to="/">
            🌸 FloraSphere
          </Link>
          <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/accueill">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/plus">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              {isAuthenticated && (
                <li className="nav-item">
                  <button className="btn btn-light btn-sm ms-2" onClick={handleLogout}>
                    Log Out
                  </button>
                </li>
              )}
              <li className="nav-item">
                <Link className="btn btn-light btn-sm ms-2" to="/panier">
                  🛒 Panier
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

