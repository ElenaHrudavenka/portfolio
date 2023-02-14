import React from 'react'
export const initialState = {
    fromName: '',
    fromEmail: '',
    message: '',
    errorMessage: '',
    successfulSending: false,
    isModalActive: false,
}
export const init = (initialState) => {
    return initialState;
}
export const reducer = (state, action) => {
    switch (action.type) {
        case 'ERROR':
            return { ...state, errorMessage: action.errorMessage };
        case 'SUCCESSFUL-SENDING':
            return { ...state, successfulSending: action.successfulSending };
        case 'CHANGE-FORM-NAME':
            return {...state, fromName: action.fromName}
        case 'CHANGE-FORM-EMAIL':
            return {...state, fromEmail: action.fromEmail}
        case 'CHANGE-MESSAGE':
            return {...state, message: action.message}
        case 'SET-MODAL-ACTIVE':
            return {...state, isModalActive: action.isModalActive}
        case 'RESET-FORM':
            return init(action.payload)
        default:
            return state;
    }
}
