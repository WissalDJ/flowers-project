// src/components/Login.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/actions/authActions';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import '../styles/Register.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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
  };

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/accueill'); // Redirect to Accueill.jsx after successful login
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="container register-container" style={{ height: '300px' }}>
      <div className="register-card">
        <h2 className="text-center mb-4">
          <FaEnvelope className="icon-title" /> Connexion
        </h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <span className="input-group-text">
              <FaEnvelope className="input-icon" />
            </span>
          </div>

          <div className="input-group mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
            />
            <span className="input-group-text">
              <FaLock className="input-icon" />
            </span>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? 'Chargement...' : 'Se connecter'}
          </button>
        </form>

        <p className="text-muted text-center mt-3">
          Pas encore inscrit ? <a href="/register">Inscrivez-vous ici</a>
        </p>
      </div>
    </div>
  );
};

export default Login;


















//src/components/Login.jsx
// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { registerUser } from '../../redux/actions/authActions';
// import { FaUser, FaEnvelope, FaLock, FaCheck } from 'react-icons/fa';
// import '../../styles/Register.css'; 

// const Register = () => {
//   const dispatch = useDispatch();
//   const loading = useSelector(state => state.auth.loading);
//   const error = useSelector(state => state.auth.error);
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//     username: ''
//   });

//   const [validationError, setValidationError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const validateForm = () => {
//     if (!formData.email || !formData.password || !formData.confirmPassword || !formData.username) {
//       setValidationError('Tous les champs sont requis');
//       return false;
//     }
//     if (formData.password !== formData.confirmPassword) {
//       setValidationError('Les mots de passe ne correspondent pas');
//       return false;
//     }
//     if (formData.password.length < 6) {
//       setValidationError('Le mot de passe doit contenir au moins 6 caractères');
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setValidationError('');
    
//     if (validateForm()) {
//       dispatch(registerUser({
//         email: formData.email,
//         username: formData.username,
//         password: formData.password 
//       }));
//     }
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/'); 
//     }
//   }, [isAuthenticated, navigate]);

//   return (
//     <div className="container register-container" style={{height:'300px'}}>
//       <div className="register-card" >
//         <h2 className="text-center mb-4">
//           <FaUser className="icon-title" /> Inscription
//         </h2>
        
//         {validationError && (
//           <div className="alert alert-danger">{validationError}</div>
//         )}
        
//         {error && (
//           <div className="alert alert-danger">{error}</div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <div className="input-group mb-3">
//             <input
//               type="text"
//               name="username"
//               className="form-control"
//               placeholder="Nom d'utilisateur"
//               value={formData.username}
//               onChange={handleChange}
//             />
//             <span className="input-group-text">
//               <FaUser className="input-icon" />
//             </span>
//           </div>

//           <div className="input-group mb-3">
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <span className="input-group-text">
//               <FaEnvelope className="input-icon" />
//             </span>
//           </div>

//           <div className="input-group mb-3">
//             <input
//               type="password"
//               name="password"
//               className="form-control"
//               placeholder="Mot de passe"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <span className="input-group-text">
//               <FaLock className="input-icon" />
//             </span>
//           </div>

//           <div className="input-group mb-3">
//             <input
//               type="password"
//               name="confirmPassword"
//               className="form-control"
//               placeholder="Confirmer le mot de passe"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//             />
//             <span className="input-group-text">
//               <FaCheck className="input-icon" />
//             </span>
//           </div>

//           <button
//             type="submit"
//             className="btn btn-primary w-100"
//             disabled={loading}
//           >
//             {loading ? 'Chargement...' : 'S\'inscrire'}
//           </button>
//         </form>

//         <p className="text-muted text-center mt-3">
//           Déjà inscrit ? <a href="/Register">Connectez-vous ici</a>
//         </p>
//       </div>
//     </div>
//   );
// };
// export default Register;