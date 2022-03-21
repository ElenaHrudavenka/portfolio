import React from 'react';
import style from './Skills.module.css'
import styleContainer from  './../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = (props) => {
    const listSkills = props.skills.map(el => {
        return (

                <Skill key={el.id} icon = {el.icon} title={el.title} description={el.description}/>

        )
    })
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Services</h2>
                <div className={style.skills}>
                {listSkills}
                </div>
            </div>
        </div>
    );
};

export default Skills;