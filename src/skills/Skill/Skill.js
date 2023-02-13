import React from 'react';
import style from './Skill.module.scss';
import js_logo from '../../assets/image/skills_logo/js_logo.svg';
import react_logo from '../../assets/image/skills_logo/react_logo.svg';
import ts_logo from '../../assets/image/skills_logo/ts_logo.svg';
import html_logo from '../../assets/image/skills_logo/html_logo.svg';
import css_logo from '../../assets/image/skills_logo/css_logo.svg';
import redux_logo from '../../assets/image/skills_logo/redux_logo.svg';

const Skill = (props) => {
  let url = '';
  if (props.title === 'JavaScript') {
    url = `url(${js_logo})`;
  }
  if (props.title === 'REACT') {
    url = `url(${react_logo})`;
  }
  if (props.title === 'CSS / SASS') {
    url = `url(${css_logo})`;
  }
  if (props.title === 'TypeScript') {
    url = `url(${ts_logo})`;
  }
  if (props.title === 'HTML') {
    url = `url(${html_logo})`;
  }
  if (props.title === 'REDUX') {
    url = `url(${redux_logo})`;
  }

  const projectStyle = {
    backgroundImage: url,
    width: '40px',
    height: '40px',
  };
  return (
    <div className={style.skill}>
      <div className={style.icon}>
        <div style={projectStyle}></div>
      </div>
      <h3>{props.title}</h3>
      <span className={style.description}>{props.description}</span>
    </div>
  );
};

export default Skill;
