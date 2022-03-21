import React from 'react';
import style from './Skills.module.css'
import styleContainer from  './../common/styles/Container.module.css'

const Skills = () => {
    return (
        <div className={style.skillsBlock}> 
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Services</h2>
                <div className={style.skills}></div>
            </div>
        </div>
    );
};

export default Skills;