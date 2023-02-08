import React from 'react';
import style from './Footer.module.scss'
import styleComponent from '../common/styles/Container.module.scss'
import Title from "../common/components/Title/Title";
import codewars from '../assets/image/linksLogo/codewars_logo.svg'
import telegram from '../assets/image/linksLogo/telegram_logo.svg'
import vk from '../assets/image/linksLogo/vk_logo.svg'
import linkedin from '../assets/image/linksLogo/linkedin_logo.svg'
import github from '../assets/image/linksLogo/github_logo.svg'
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <div className={style.footerBox}>
            <div className={`${styleComponent.container} ${style.footerContainer}`}>
                <Title titleH3={"Alena Hrudavenka"}/>
                <Fade bottom>
                <div className={style.socialIcons}>
                    <a href="https://t.me/AlenaHrudavenka" className={style.socialIcon} target="_blank">
                        <img src={telegram} alt="Telegram"/>
                    </a>
                    <a href="https://www.linkedin.com/in/alena-hrudavenka-47948922a/" className={style.socialIcon} target="_blank">
                        <img src={linkedin} alt="LinkedIn"/>
                    </a>
                    <a href="https://vk.com/kisseli" className={style.socialIcon} target="_blank">
                        <img src={vk} alt="vk"/>
                    </a>
                    <a href="https://www.codewars.com/users/ElenaHrudavenka" className={style.socialIcon} target="_blank">
                        <img src={codewars} alt="Codewars"/>
                    </a>
                    <a href="https://github.com/ElenaHrudavenka" className={style.socialIcon} target="_blank">
                        <img src={github} alt="GitHub"/>
                    </a>
                </div>
                <span className={style.span}>Link to my CV</span>
                </Fade>
            </div>
        </div>

    );
};

export default Footer;