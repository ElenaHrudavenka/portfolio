import React from 'react';
import style from './Contacts.module.scss';
import styleComponent from '../common/styles/Container.module.scss';
import Title from '../common/components/Title/Title';
import Fade from 'react-reveal/Fade';
import Popup from 'reactjs-popup';

const Contacts = ({ handleSubmit, sendEmail, register, successfulSending, closeModal, errorMessage, errors }) => {
  return (
    <div id='contacts' className={style.contactsBlock}>
      <div className={`${styleComponent.container} ${style.contactsContainer}`}>
        <Fade>
          <Title titleH2={'GET IN TOUCH'} />
          <form className={style.form} name='contacts' onSubmit={handleSubmit(sendEmail)}>
            <input
              {...register('fromName', {
                required: true,
                pattern: {
                  value: new RegExp('^[A-Za-zА-яа-я0-9]{2,50}$'),
                  message: 'The name field must not be empty and must contain from 2 to 50 characters.',
                },
              })}
              type='text'
              placeholder='Name'
            />
            <input
              {...register('fromEmail', {
                required: true,
                pattern: {
                  value: new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                  message: 'The email address does not match the format.',
                },
              })}
              type='text'
              placeholder='E-mail'
            />
            <textarea {...register('message', { required: true })} placeholder='Your message' />
            <input value={'Send Message'} type={'submit'} />
          </form>
        </Fade>
        {errors.fromName && <span className={style.contactsContainer__error}>{errors.fromName.message}</span>}
        {errors.fromEmail && <span className={style.contactsContainer__error}>{errors.fromEmail.message}</span>}
        {successfulSending && (
          <Popup open={successfulSending} closeOnDocumentClick onClose={closeModal}>
            <div className={style.popup}>{successfulSending && <span>The message was sent successfully!</span>}</div>
          </Popup>
        )}
        {errorMessage && (
          <Popup open={errorMessage} closeOnDocumentClick onClose={closeModal}>
            <div className={style.popup}>
              {errorMessage && <span>{`Error has occurred! Message: ${errorMessage}`}</span>}
            </div>
          </Popup>
        )}
      </div>
    </div>
  );
};

export default Contacts;
