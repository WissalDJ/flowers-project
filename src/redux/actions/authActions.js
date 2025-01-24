// // src/redux/actions/authActions.js
// import { 
//     REGISTER_START, 
//     REGISTER_SUCCESS, 
//     REGISTER_FAIL 
//   } from './types';
  
//   export const registerUser = (userData) => {
//     return async (dispatch) => {
//       dispatch({ type: REGISTER_START });
      
//       try {

        
//         dispatch({
//           type: REGISTER_SUCCESS,
//           payload: userData
//         });
//       } catch (error) {
//         dispatch({
//             type: REGISTER_FAIL,
//             payload: error?.message || 'Une erreur s\'est produite'
//           });
//       }
//     };
//   };
// authActions.js
// src/redux/actions/authActions.js
import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';

// Register Action
export const registerUser = (userData) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_START });

    try {
      // Simulate API call for registration
      // Replace this with your actual API call
      setTimeout(() => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: userData,
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error?.message || 'Une erreur s\'est produite',
      });
    }
  };
};

// Login Action
export const loginUser = (credentials) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_START });

    try {
      // Simulate API call for login
      // Replace this with your actual API call
      setTimeout(() => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: credentials,
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error?.message || 'Une erreur s\'est produite',
      });
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
  };
};
