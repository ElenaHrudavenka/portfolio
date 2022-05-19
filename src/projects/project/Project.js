import React from 'react';
import style from './Project.module.css'

const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <a href={props.link} className={style.button}>Look</a>
            </div>
            <h3>{props.projectTitle}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default Project;