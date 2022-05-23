import React from 'react';
import styleContainer from '../common/styles/Container.module.scss'
import style from './Projects.module.scss'
import Project from './project/Project';
import Title from '../common/components/title/Title';
import socialNetworkImage from './../assets/image/sotial.jpg'
import todoImage from './../assets/image/todo.jpg'

const Projects = (props) => {
    let url = ''
    const projectsList = props.projects.map((el,index) => {
        if (el.projectTitle === "Todolist") {
            url = `url(${todoImage})`
        } else if (el.projectTitle === "Social Network") {
            url = `url(${socialNetworkImage})`
        }
        const projectStyle = {
            backgroundImage: url
        }
        return <Project key={el.id} style={projectStyle} projectTitle = {el.projectTitle} description={el.description} image={el.image} link={el.link}/>
    })
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title titleH2={"My Projects"} titleH3={"Take A Look At"} />
                <div className={style.projects}>
                    {projectsList}
                </div>
            </div>
        </div>
    );
};

export default Projects;