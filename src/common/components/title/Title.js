import React from 'react';
import style from './Title.module.scss'

const Title = (props) => {
    return (
        <div  className={style.title}>
            {props.titleH3 && <h3>{props.titleH3}</h3>}
            {props.titleH2 && <h2>{props.titleH2}</h2>}
        </div>
)
};

export default Title;