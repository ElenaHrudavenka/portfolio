import React from 'react';
import style from '../../components/Button/Button.module.scss';

const Button = (props) => {
  return (
    <a href={props.link} className={style.btn} target={'_blank'}>
      {props.text}
    </a>
  );
};

export default Button;
