import React from 'react';
import styleComponent from '../common/styles/Container.module.scss'
import style from './Freelance.module.scss'
import Title from "../common/components/Title/Title";

const Freelance = () => {
    return (
        <div className={style.freelanceBox}>
            <div className={`${styleComponent.container} ${style.freelanceContainer}`}>
                <Title titleH2={"I'm Available For Freelance"}/>
                <a href="" className={style.button} onClick={()=>{alert("OK")}}>Make Offer</a>
            </div>
        </div>

    );
};

export default Freelance;