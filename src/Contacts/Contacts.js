import React from 'react';
import style from './Contacts.module.scss'
import styleComponent from '../common/styles/Container.module.scss'
import Title from "../common/components/Title/Title";
import Button from "../common/components/Button/Button";
import Fade from 'react-reveal/Fade';

const Contacts = () => {
    return (
        <div id='contacts' className={style.contactsBlock}>
            <div className={`${styleComponent.container} ${style.contactsContainer}`}>
                <Fade>
                <Title titleH2={"GET IN TOUCH"}/>
                <form className={style.form} name="contacts">
                    <input type="text" placeholder="Name"/>
                    <input type="text"placeholder="E-mail"/>
                    <textarea placeholder="Your message"/>
                </form>
                <Button text={'Send Message'} link={''}/>
                </Fade>
            </div>
        </div>

    );
};

export default Contacts;