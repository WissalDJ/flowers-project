import { GET_PRODUCTS } from '../actions/productsActions';
const initialState = {
  produits: [],
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        produits: action.payload,
      };
    default:
      return state;
  }
};
export default productsReducer;
