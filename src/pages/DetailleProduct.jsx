import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../redux/actions/productsActions';
import { addToCart } from '../redux/actions/cartActions';
import '../styles/DetailleProduct.css';

const DetailleProduct = () => {
  const dispatch = useDispatch();
  const produits = useSelector((state) => state.products.produits);
  const { id } = useParams();

  useEffect(() => {
    if (produits.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, produits.length]);

  const produit = produits.find((p) => p.id === parseInt(id));

  const handleAddToCart = () => {
    if (produit) {
      dispatch(addToCart(produit));
    }
  };

  if (!produit) {
    return (
      <div className="loading-container">
        <div className="spinner-border loading-spinner text-primary" role="status">
          <span className="visually-hidden">Load...</span>
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
                Reference: #{produit.id}
              </p>
              <div className="product-price">
                {produit.price.toFixed(2)} €
              </div>

              <div className="product-features">
                <h4 className="mb-3">Characteristics</h4>
                <div className="feature-item">
                  <i className="bi bi-tag feature-icon"></i>
                  Category: {produit.category}
                </div>
                {produit.rating && (
                  <div className="feature-item">
                    <i className="bi bi-star-fill rating-stars"></i>
                    {produit.rating.rate}/5
                    <span className="ms-2 text-muted">
                      ({produit.rating.count} opinion)
                    </span>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <h4 className="mb-3">Description</h4>
                <p className="product-description">{produit.description}</p>
              </div>

              <button onClick={handleAddToCart} className="btn add-to-cart-btn">
                <i className="bi bi-cart-plus me-2"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailleProduct;