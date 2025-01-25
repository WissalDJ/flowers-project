import React from 'react';
import '../styles/about.css';
const About = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h1 className="display-4 mb-4" style={{ color: '#2c3e50', fontFamily: 'Playfair Display, serif' }}>
              Our Passion for Flowers
          </h1>
          <p className="lead" style={{ color: '#555'}}>
          Since 2010, we have been creating magical moments through floral art. Each bouquet tells a story, each arrangement expresses an emotion.
          </p>
        </div>
        <div className="col-md-6">
          <img src="images/flower1.jpeg" alt="Notre atelier" className="img-fluid rounded shadow-lg" style={{ objectFit: 'cover' }}/>
        </div>
      </div>
      <div className="row my-5 py-5 bg-light rounded-3">
        <div className="col-12 text-center mb-5">
          <h2 style={{ color: '#2c3e50', fontFamily: 'Playfair Display, serif' }}>Nos Valeurs</h2>
        </div>
        <div className="col-md-4 text-center mb-4">
          <div className="card border-0 bg-transparent">
            <div className="card-body">
              <i className="bi bi-heart-fill mb-3" style={{ fontSize: '2rem', color: '#e74c3c' }}></i>
              <h3 className="h4 mb-3">Passion</h3>
              <p>Our love for flowers guides each of our creations, infusing life and beauty into each arrangement.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center mb-4">
          <div className="card border-0 bg-transparent">
            <div className="card-body">
              <i className="bi bi-gem mb-3" style={{ fontSize: '2rem', color: '#3498db' }}></i>
              <h3 className="h4 mb-3">Quality </h3>
              <p>We meticulously select our flowers from the best local producers to guarantee freshness and longevity.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center mb-4">
          <div className="card border-0 bg-transparent">
            <div className="card-body">
              <i className="bi bi-flower1 mb-3" style={{ fontSize: '2rem', color: '#27ae60' }}></i>
              <h3 className="h4 mb-3">Créativité</h3>
              <p>Each creation is unique, inspired by nature and adapted to your desires for unforgettable moments.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-12 text-center mb-5">
          <h2 style={{ color: '#2c3e50', fontFamily: 'Playfair Display, serif' }}>Our Team</h2>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card border-0 shadow-lg">
            <img src="images/team2.jpeg" className="card-img-top" style={{width: '200px',height: '200px',borderRadius: '50%'}} alt="Marie" />
            <div className="card-body text-center">
              <h3 className="h5 mb-2">Wissal AOUKILI</h3>
              <p className="text-muted">Chef  FloraSphere</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card border-0 shadow-lg">
            <img src="images/team.jpeg" className="card-img-top" style={{width: '200px',height: '200px',borderRadius: '50%'}} alt="Pierre" />
            <div className="card-body text-center">
              <h3 className="h5 mb-2">Aissa EL QUADAOUI</h3>
              <p className="text-muted">Designer Floral</p>
            </div>
          </div>
        </div>
        
      </div>

      <div className="row mt-5 py-5 bg-light rounded-3">
        <div className="col-md-8 mx-auto text-center">
          <h2 className="mb-4" style={{ color: '#2c3e50', fontFamily: 'Playfair Display, serif' }}>Visit our shop</h2>
          <p className="lead mb-4">Discover our floral universe and let yourself be seduced by our unique creations.</p>
          <div className="d-flex justify-content-center gap-3">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;