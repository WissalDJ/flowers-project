// src/redux/actions/cartActions.js
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from './types';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: { ...product, quantity: 1 }
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId
});

export const updateQuantity = (productId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id: productId, quantity }
});