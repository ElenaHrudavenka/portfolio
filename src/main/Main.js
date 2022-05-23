import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.mainContainer}>
                <div className={style.salutation}>
                    <h2>I'am</h2>
                    <h1>Alena Hrudavenka</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default Main;