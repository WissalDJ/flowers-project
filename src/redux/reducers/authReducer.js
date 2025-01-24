// // src/redux/reducers/authReducer.js
import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/types';

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
    case LOGIN_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case LOGOUT: // Handle logout
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };  
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;



















// // src/redux/reducers/authReducer.js
// import {
//     REGISTER_START,
//     REGISTER_SUCCESS,
//     REGISTER_FAIL
//   } from '../actions/types';
  
//   const initialState = {
//     user: null,
//     loading: false,
//     error: null,
//     isAuthenticated: false
//   };
  
//   const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case REGISTER_START:
//         return {
//           ...state,
//           loading: true,
//           error: null
//         };
//       case REGISTER_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           isAuthenticated: true,
//           user: action.payload,
//           error: null
//         };
//       case REGISTER_FAIL:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload
//         };
//       default:
//         return state;
//     }
//   };
//   export default authReducer;