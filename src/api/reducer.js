import React from 'react';
export const initialState = {
  errorMessage: '',
  successfulSending: false,
};
export const init = (initialState) => {
  return initialState;
};
export const reducer = (state, action) => {
  switch (action.type) {
    case 'ERROR':
      return { ...state, errorMessage: action.errorMessage };
    case 'SUCCESSFUL-SENDING':
      return { ...state, successfulSending: action.successfulSending };
    default:
      return state;
  }
};
