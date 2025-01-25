import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import '../styles/Accueil.css';
import Comment from './Comment'; 
const Accueil = () => {
  return (
    <div className="accueil-page">
      {/* Section */}
      <div className="hero-section position-relative text-center">
        <img
          src="/images/bgf2.avif"
          alt="Wedding Flowers Background"
          className="background1"
        />
        
        <div className="hero-content  p-5 text-white shadow-lg  bg-opacity-50">
          <h1 className="mb-3 fw-bold">Flowers</h1>
          <h4 className="mb-4">For special events and occasions</h4>
          <p className="mb-4">
            Welcome to FloraSphere, your online destination to discover unique and elegant floral bouquets,
            designed to brighten your special moments. Whether it's for a romantic occasion, a joyful celebration,
            or simply to add a touch of nature to your daily life, our carefully curated collection will meet all your desires. We offer a personalized service to create custom floral arrangements tailored to your tastes and needs. With FloraSphere,
            give or treat yourself to floral creations that exude freshness, emotion, and craftsmanship. Explore our world and let yourself be inspired by the beauty of flowers! 🌸✨
          </p>
          <Link to='/about'>
            <button className="btn btn-outline-light px-4 py-2 rounded-pill">Learn More</button>
          </Link>
        </div>
      </div>
      {/* Product Showcase Section */}
      <div className="container  mt-5 text-center">
        <h2 className="display-5 fw-bold" style={{color: '#8d5f6a', fontSize: 40}} >Our Awesome Flowers</h2>
        <p className="text-muted mb-5">Shop the collection</p>

        <div className="row g-4">
          {/* Product */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="/images/f2.jpeg"
                alt="Sunshine Rose & Alstroemeria Bouquet"
                className="card-img-top rounded-top"
              />
              <div className="card-body">
                <h5 className="card-title">Crescent Bouquet </h5>
                <p className="card-text text-secondary">300.00 MAD</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="/images/flower2.jpg"
                alt="Afternoon Mimosa Bouquet"
                className="card-img-top rounded-top"
              />
              <div className="card-body">
                <h5 className="card-title">Timeless Elegance</h5>
                <p className="card-text text-secondary">200.00 MAD</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="/images/f6.jpeg"
                alt="GlobalRose 50 Fresh Cut Pink Roses"
                className="card-img-top rounded-top"
              />
              <div className="card-body">
                <h5 className="card-title">White Anemone</h5>
                <p className="card-text text-secondary">100.00 MAD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="container cta-section text-center py-5 bg-light mt-5">
        <h3 className="fw-bold" style={{color: '#8d5f6a', fontSize: 30}} >Let’s Work Together</h3>
        <p className="text-muted">Explore our services and see how we can make your events special.</p>
        <Link to='/plus'>
           <button className="btn btn-dark px-5 py-2 rounded-pill">See All Services</button>
        </Link>
      </div>
      <div className="comments-section mt-5">
      </div>
      { /*comment of the clients */}
      <Comment />
    </div>
  );
};
export default Accueil;





















