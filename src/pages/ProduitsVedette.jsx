import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../redux/actions/productsActions';
import { addToCart } from '../redux/actions/cartActions';
import '../styles/ProduitVedette.css';

const ProduitsVedette = () => {
  const dispatch = useDispatch();
  const produits = useSelector((state) => state.products.produits);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProduits, setFilteredProduits] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    const filtered = produits.filter(produit =>
      produit.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProduits(filtered);
  }, [searchTerm, produits]);

  const handleAddToCart = (produit) => {
    dispatch(addToCart(produit));
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 title">Produits Vedettes</h2>
      
      {/* Search */}
      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <div className="input-group">
            <input
              type="text"
              className="bg-search"
              placeholder="Rechercher des produits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="row g-4">
        {filteredProduits.length > 0 ? (
          filteredProduits.map((produit) => (
            <div className="col-md-4 mb-4" key={produit.id}>
              <div className="card h-100 shadow-sm" id='cardproduct'>
                <img
                  src={produit.image}
                  className="card-img-top p-3"
                  alt={produit.title}
                  style={{ height: '200px', objectFit: 'contain' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{produit.title}</h5>
                  <p className="card-text text-muted mb-4">{produit.price} MAD</p>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between">
                      <Link to={`/details/${produit.id}`} className="btn btn-outline btn-detaille">
                        Voir Détails
                      </Link>
                      <button
                        onClick={() => handleAddToCart(produit)}
                        className="btn btn-ajouter"
                      >
                        <i className="bi bi-cart-plus me-2"></i>
                        Ajouter au panier
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center message-error">
            <p>Aucun produit trouvé</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProduitsVedette;