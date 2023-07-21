import * as emailjs from '@emailjs/browser';

export const ApiSend = {
  sendMessage(formData, dispatch) {
    emailjs
      .send(
        'service_xaxtuii',
        'template_dsf00op',
        {
          from_name: formData.fromName,
          from_email: formData.fromEmail,
          message: formData.message,
        },
        'D2y0R2CLIvB7jnSlv'
      )
      .then((response) => {
        if (response.status >= 200 && response.status <= 399) {
          dispatch({ type: 'SUCCESSFUL-SENDING', successfulSending: true });
        } else {
          dispatch({ type: 'ERROR', errorMessage: 'Some error!' });
        }
      })
      .catch((error) => {
        if (error.status >= 500) {
          dispatch({ type: 'ERROR', errorMessage: 'Server error' });
        }
        if (error.status >= 400) {
          dispatch({ type: 'ERROR', errorMessage: 'Query error' });
        }
        if (!error.status) {
          dispatch({ type: 'ERROR', errorMessage: 'Network error!' });
        }
      });
  },
};
