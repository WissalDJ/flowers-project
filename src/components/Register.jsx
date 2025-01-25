import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/actions/authActions';
import { FaUser, FaEnvelope, FaLock, FaCheck } from 'react-icons/fa';
import '../styles/Register.css';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    dispatch(registerUser(formData));
    navigate('/login'); 
  };

  return (
    <div className="container register-container">
      <div className="register-card">
        <h2 className="text-center mb-4">
          <FaUser className="icon-title" /> Sign Up
        </h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange}/>
            <span className="input-group-text"> <FaUser className="input-icon" /></span>
          </div>
          <div className="input-group mb-3">
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
            <span className="input-group-text"> <FaEnvelope className="input-icon" /></span>
          </div>
          <div className="input-group mb-3">
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
            <span className="input-group-text"> <FaLock className="input-icon" /></span>
          </div>
          <div className="input-group mb-3">
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange}/>
            <span className="input-group-text"> <FaCheck className="input-icon" />
            </span>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
        <p className="text-muted text-center mt-3">
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Register;