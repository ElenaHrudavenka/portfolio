import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

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