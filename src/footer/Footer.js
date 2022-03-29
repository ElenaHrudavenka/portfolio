import React from 'react';
import style from './Footer.module.css'
import styleComponent from './../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={style.footerBox}>
            <div className={`${styleComponent.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Elena Hrudavenka</h2>
                <div className={style.socialNetwork}>
                    <a href="" className={style.button}></a>
                    <a href="" className={style.button}></a>
                    <a href="" className={style.button}></a>
                    <a href="" className={style.button}></a>
                </div>
                <span className={style.span}>All rights reserved</span>
            </div>
        </div>

    );
};

export default Footer;