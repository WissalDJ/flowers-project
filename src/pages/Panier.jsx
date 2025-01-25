// src/components/Panier.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions/cartActions';

const Panier = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">My Cart</h2>
      {cart.length === 0 ? (
        <div className="alert alert-info text-center">
          Your cart is empty
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          style={{ width: '50px', marginRight: '15px' }}
                        />
                        <span>{item.title}</span>
                      </div>
                    </td>
                    <td>{item.price} MAD</td>
                    <td>
                      <div className="input-group" style={{ width: '120px' }}>
                        <button 
                          className="btn btn-outline-secondary"
                          onClick={() => dispatch(updateQuantity(item.id, Math.max(1, item.quantity - 1)))}
                        >
                          -
                        </button>
                        <input 
                          type="number" 
                          className="form-control text-center"
                          value={item.quantity}
                          onChange={(e) => dispatch(updateQuantity(item.id, parseInt(e.target.value) || 1))}
                          min="1"
                        />
                        <button 
                          className="btn btn-outline-secondary"
                          onClick={() => dispatch(updateQuantity(item.id, item.quantity + 1))}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{(item.price * item.quantity).toFixed(2)} €</td>
                    <td>
                      <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="row justify-content-end mt-4">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Summary</h5>
                  <hr />
                  <div className="d-flex justify-content-between mb-3">
                    <span>Total</span>
                    <strong>{calculateTotal()} MAD</strong>
                  </div>
                  <button className="btn btn-primary w-100">
                  Proceed to payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Panier;