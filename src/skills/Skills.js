import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Skill from './Skill/Skill';
import Title from '../common/components/Title/Title';

const Skills = (props) => {
  const listSkills = props.skills.map((el) => {
    return <Skill key={el.id} icon={el.icon} title={el.title} description={el.description} />;
  });
  return (
    <div id='skills' className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Title titleH2={'My Services'} />
        <div className={style.skills}>{listSkills}</div>
      </div>
    </div>
  );
};

export default Skills;
