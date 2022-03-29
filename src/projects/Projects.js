import React from 'react';
import styleContainer from './../common/styles/Container.module.css'
import style from './Projects.module.css'
import Project from "./project/Project";

const Projects = (props) => {
    const projectsList = props.projects.map(el => <Project key={el.id} projectTitle = {el.projectTitle} description={el.description} image={el.image} link={el.link}/>)
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    {projectsList}
                </div>
            </div>
        </div>
    );
};

export default Projects;