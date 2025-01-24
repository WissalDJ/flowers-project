// // src/redux/reducers/index.js

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import clientReducer from './clientReducer'; // Import the new reducer

export default combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducer,
  clients: clientReducer, // Add the new reducer


});
