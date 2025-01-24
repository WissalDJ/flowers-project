import { ADD_CLIENT , UPDATE_CLIENT , DELETE_CLIENT } from '../actions/types';
const clientReducer = (state = [], action) => {
    switch (action.type) {
      case ADD_CLIENT:
        return [...state, action.payload];
      case UPDATE_CLIENT:
        return state.map((client) =>
          client.id === action.payload.id ? action.payload : client
        );
      case DELETE_CLIENT:
        return state.filter((client) => client.id !== action.payload);
      default:
        return state;
    }
  };
export default clientReducer;