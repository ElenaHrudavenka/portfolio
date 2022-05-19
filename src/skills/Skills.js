import React from 'react';
import style from './Skills.module.css'
import styleContainer from  './../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/styles/components/title/Title";

const Skills = (props) => {
    const listSkills = props.skills.map(el => {
        return (
                <Skill key={el.id} icon = {el.icon} title={el.title} description={el.description}/>
        )
    })
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title titleH2={"My Services"} />
                <div className={style.skills}>
                {listSkills}
                </div>
            </div>
        </div>
    );
};

export default Skills;