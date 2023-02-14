import * as emailjs from "@emailjs/browser";

export const ApiSend = {
    sendMessage(form, dispatch) {
        emailjs.send(
            "service_xaxtuii",
            "template_dsf00op",
            {
                from_name: form.fromName,
                from_email: form.fromEmail,
                message: form.message,
            },
            "D2y0R2CLIvB7jnSlv",
        ).then((response)=>{
            if (response.status >= 200 && response.status <= 399) {
                dispatch({type: 'SUCCESSFUL-SENDING', successfulSending: true })
            }
        }).catch((error)=>{
            // client received an error response (5xx, 4xx)
            if (error.response) {dispatch({type: 'ERROR', errorMessage: error.message})}
            // client never received a response, or request never left
            if (error.request) {dispatch({type: 'ERROR', errorMessage: "Network error!"})}
            if (error.response) {dispatch({type: 'ERROR', errorMessage: error.message})}
        })
    }
}