import React, {useReducer} from 'react';
import style from './Contacts.module.scss';
import styleComponent from '../common/styles/Container.module.scss';
import Title from '../common/components/Title/Title';
import Fade from 'react-reveal/Fade';
import {init, initialState, reducer} from "../api/reducer";
import {ApiSend} from "../api/api";
import Popup from "reactjs-popup";

const Contacts = () => {
    /*const form = useRef()*/
    /*    const [fromName, setFromName] = useState('');
        const [fromEmail, setFromEmail] = useState('');
        const [message, setMessage] = useState('');
        const onChangeFromName = (e) => {
            setFromName(e.currentTarget.value);
        }
        const onChangeFromEmail = (e) => {
            setFromEmail(e.currentTarget.value);
        }
        const onChangeMessage = (e) => {
            setMessage(e.currentTarget.value);
        }*/
    const [state, dispatch] = useReducer(reducer, initialState, init);
    const {fromName, fromEmail, message, errorMessage, successfulSending, isModalActive} = state
    const onChangeFromName = (e) => {
        /*alert(e.currentTarget.value)*/
        /*alert(state.fromName)*/
        dispatch({type: 'CHANGE-FORM-NAME', fromName: e.currentTarget.value});
    }
    const onChangeFromEmail = (e) => {
        dispatch({type: 'CHANGE-FORM-EMAIL', fromEmail: e.currentTarget.value});
    }
    const onChangeMessage = (e) => {
        dispatch({type: 'CHANGE-MESSAGE', message: e.currentTarget.value});
    }
    const sendEmail = (e) => {
        e.preventDefault();
        const formData = {fromName, fromEmail, message};
        ApiSend.sendMessage(formData, dispatch);
        dispatch({type: 'SUCCESSFUL-SENDING', successfulSending: true})
    }
    const closeModal = () => {
        /*dispatch({type: 'SET-MODAL-ACTIVE', isModalActive: false})*/
        dispatch({type: 'SUCCESSFUL-SENDING', isModalActive: false})
    }
    return (
        <div id='contacts' className={style.contactsBlock}>
            <div className={`${styleComponent.container} ${style.contactsContainer}`}>
                <Fade>
                    <Title titleH2={'GET IN TOUCH'}/>
                    <form className={style.form} name='contacts' onSubmit={sendEmail}>
                        <input type='text'
                               placeholder='Name'
                               name='fromName'
                               onChange={onChangeFromName}
                               pattern={'^[A-Za-z0-9]{2,50}$'}
                               title={'The name field must not be empty and must contain from 2 to 50 characters.'}
                               required
                        />
                        <input type='text'
                               placeholder='E-mail'
                               name='fromEmail'
                               onChange={onChangeFromEmail}
                               pattern={'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'}
                               title={'The email address does not match the format.'}
                        />
                        <textarea placeholder='Your message' name='message' onChange={onChangeMessage} required/>
                        <input value={'Send Message'} type={'submit'}/>
                    </form>
                </Fade>
                <Popup open={successfulSending} closeOnDocumentClick onClose={closeModal}>
                    <div className={style.popup}>
                        <span>The message was sent successfully!</span>
                    </div>
                </Popup>
            </div>
        </div>
    );
};

export default Contacts;
