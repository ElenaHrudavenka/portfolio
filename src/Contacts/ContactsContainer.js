import React, { useReducer } from 'react';
import Contacts from './Contacts';
import { init, initialState, reducer } from '../api/reducer';
import { useForm } from 'react-hook-form';
import { ApiSend } from '../api/api';

const ContactsContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const { successfulSending, errorMessage } = state;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const sendEmail = (formData, e) => {
    e.preventDefault();
    ApiSend.sendMessage(formData, dispatch);
  };
  const closeModal = () => {
    dispatch({ type: 'ERROR', errorMessage: '' });
    !errorMessage && reset();
  };
  console.log(errors);
  return (
    <Contacts
      successfulSending={successfulSending}
      register={register}
      handleSubmit={handleSubmit}
      sendEmail={sendEmail}
      closeModal={closeModal}
      errorMessage={errorMessage}
      errors={errors}
    />
  );
};

export default ContactsContainer;
