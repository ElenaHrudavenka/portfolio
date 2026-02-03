import { v1 } from 'uuid';

const TodolistDescription =
    'This application serves to plan users\' tasks. The authorized user has the ability to create, edit and delete todolists. The application allows to add, edit, delete and change the status of todolist\'s tasks. Also it is possible to sort tasks by their status. The application has a simple and intuitive user interface. This project is a Single Page Application (SPA). It developed with React/Redux (TypeScript, material-ui, Axios).';
const TrainingCardsDescription =
    'This application serves for education purposes. It uses training cards as educational material. It has the next functionality: registration, password recovery, profile information changing, card decks sorting and filtering. Also it allows to rate learning progress. Authorized user has the ability to add, edit, remove personal decks and cards, view decks and cards of other users.  During this project development I gained experience in team work. This project is a SPA created using Rect/Redux and TypeScript.';
const projects = [
    {
        id: v1(),
        image: '',
        projectTitle: 'Todolist',
        description: TodolistDescription,
        link: 'https://github.com/ElenaHrudavenka/todolist.git',
        gitHub: 'https://github.com/ElenaHrudavenka/todolist.git',
    },
    {
        id: v1(),
        image: '',
        projectTitle: 'Training Cards',
        description: TrainingCardsDescription,
        link: 'https://github.com/pv18/project-cards-front.git',
        gitHub: 'https://github.com/pv18/project-cards-front.git',
    },
];

export default projects;
