import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/actions/authActions';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import '../styles/Register.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
    navigate('/accueill'); 
  };

  return (
    <div className="container register-container">
      <div className="register-card">
        <h2 className="text-center mb-4">
          <FaEnvelope className="icon-title" /> Sign In
        </h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
            <span className="input-group-text"><FaEnvelope className="input-icon" /></span>
          </div>
          <div className="input-group mb-3">
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}
            />
            <span className="input-group-text"> <FaLock className="input-icon" /> </span>
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </form>
        <p className="text-muted text-center mt-3">
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;