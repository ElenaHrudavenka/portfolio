import React from 'react';
import style from './Project.module.scss';
import Button from '../../common/components/Button/Button';

const Project = (props) => {
  return (
    <div className={style.project}>
      <div className={style.image} style={props.style}>
        <Button text={'Look project'} link={props.link} />
        {/*<a href={props.link} target={'_blank'} className={style.button}>Look</a>*/}
      </div>
      <h3>{props.projectTitle}</h3>
      <span className={style.description}>{props.description}</span>
      <span className={style.description}>{props.gitHub}</span>
    </div>
  );
};

export default Project;
