
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../redux/actions/productsActions';
import { addToCart } from '../redux/actions/cartActions';
import '../styles/DetailleProduct.css';

const DetailleProduct = ({ produits, getProducts, addToCart }) => {
  const { id } = useParams();
  
  useEffect(() => {
    if (produits.length === 0) {
      getProducts();
    }
  }, [getProducts, produits.length]);

  const produit = produits.find((p) => p.id === parseInt(id));

  const handleAddToCart = () => {
    if (produit) {
      addToCart(produit);
    }
  };

  if (!produit) {
    return (
      <div className="loading-container">
        <div className="spinner-border loading-spinner text-primary" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="product-image-container">
              <img
                src={produit.image}
                alt={produit.title}
                className="product-image"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-info">
              <h1 className="product-title">{produit.title}</h1>
              <p className="product-reference">
                <i className="bi bi-upc me-2"></i>
                Référence: #{produit.id}
              </p>
              <div className="product-price">
                {produit.price.toFixed(2)} €
              </div>
              
              <div className="product-features">
                <h4 className="mb-3">Caractéristiques</h4>
                <div className="feature-item">
                  <i className="bi bi-tag feature-icon"></i>
                  Catégorie: {produit.category}
                </div>
                {produit.rating && (
                  <div className="feature-item">
                    <i className="bi bi-star-fill rating-stars"></i>
                    {produit.rating.rate}/5
                    <span className="ms-2 text-muted">
                      ({produit.rating.count} avis)
                    </span>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <h4 className="mb-3">Description</h4>
                <p className="product-description">{produit.description}</p>
              </div>

              <button
                onClick={handleAddToCart}
                className="btn add-to-cart-btn"
              >
                <i className="bi bi-cart-plus me-2 "></i>
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  produits: state.products.produits,
});

export default connect(mapStateToProps, { getProducts, addToCart })(DetailleProduct);