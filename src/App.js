// src/App.js
import { BrowserRouter as Router, Routes, Route , Navigate  } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Register from './pages/register';
import Panier from './pages/Panier';
import Header from './pages/Header';
import Footer from './pages/Footer';
import DetailleProduct from './pages/DetailleProduct';
import ProduitsVedette from './pages/ProduitsVedette';
import ClientManagement from './pages/ClientManagment';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';


import About from './pages/about';
import './App.css';
function App() {
  return (
     <div className='all'>
    <Router>
      <Header />
      <Routes>
      <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/accueill" element={<Accueil />} />
          <Route path="/about" element={<About />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/plus" element={<ProduitsVedette />} />
          <Route path="/details/:id" element={<DetailleProduct />} />
          <Route path="/clients" element={<ClientManagement />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
        

      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;


