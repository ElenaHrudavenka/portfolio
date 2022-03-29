import React from 'react';
import styleComponent from './../common/styles/Container.module.css'
import style from './Freelance.module.css'

const Freelance = () => {
    return (
        <div className={style.freelanceBox}>
            <div className={`${styleComponent.container} ${style.freelanceContainer}`}>
                <h2 className={style.title}>I'm Available For Freelance</h2>
                <a href="" className={style.button} onClick={()=>{alert("OK")}}>Make Offer</a>
            </div>
        </div>

    );
};

export default Freelance;