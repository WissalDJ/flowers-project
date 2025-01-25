import {REGISTER_START,REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_START,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT,} from './types';

export const registerUser = (userData) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_START });

    try {
      setTimeout(() => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: userData,
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error?.message || 'Une erreur',
      });
    }
  };
};

// Sign In (Login) Action
export const loginUser = (credentials) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_START });

    try {
      
      setTimeout(() => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: credentials,
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error?.message || 'Une erreur',
      });
    }
  };
};

// Log Out Action
export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
  };
};