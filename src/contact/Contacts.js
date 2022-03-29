import React from 'react';
import style from './Contacts.module.css'
import styleComponent from './../common/styles/Container.module.css'

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleComponent.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.form} name="contacts">
                    <input type="text" placeholder="Name"/>
                    <input type="text"placeholder="E-mail"/>
                    <textarea placeholder="Your message"></textarea>
                </form>
                <a href="" className={style.button}>Send Message</a>
            </div>
        </div>

    );
};

export default Contacts;