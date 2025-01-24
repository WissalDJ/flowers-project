import { ADD_CLIENT , UPDATE_CLIENT , DELETE_CLIENT } from './types';
export const addClient = (client) => ({
    type: ADD_CLIENT,
    payload: client,
  });
  
  export const updateClient = (client) => ({
    type: UPDATE_CLIENT,
    payload: client,
  });
  
  export const deleteClient = (id) => ({
    type: DELETE_CLIENT,
    payload: id,
  });
  