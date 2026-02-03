import { v1 } from 'uuid';

import ts_logo from '../assets/image/skills_logo/ts_logo.svg';
import react_logo from '../assets/image/skills_logo/react_logo.svg';
import nextjs_logo from '../assets/image/skills_logo/nextjs_logo.svg';
import redux_logo from '../assets/image/skills_logo/redux_logo.svg';
import git_logo from '../assets/image/skills_logo/git_logo.svg';
import mui_logo from '../assets/image/skills_logo/mui_logo.svg';
import styled_logo from '../assets/image/skills_logo/styled_logo.svg';
import jest_logo from '../assets/image/skills_logo/jest_logo.svg';
import css_logo from '../assets/image/skills_logo/css_logo.svg';
import html_logo from '../assets/image/skills_logo/html_logo.svg';

const skillsDetails = [
    {
        id: v1(),
        icon: ts_logo,
        title: 'TypeScript',
        description:
            'I use TypeScript in my projects as a modern approach that helps prevent potential errors and improves code reliability and maintainability.',
    },
    {
        id: v1(),
        icon: react_logo,
        title: 'React',
        description:
            'I use React for building user interfaces because it provides efficient component-based rendering and improves development speed.',
    },
    {
        id: v1(),
        icon: nextjs_logo,
        title: 'Next.js',
        description:
            'I use Next.js as a full-featured framework that allows more flexible and efficient use of React and TypeScript capabilities.',
    },
    {
        id: v1(),
        icon: redux_logo,
        title: 'Redux / Redux Toolkit',
        description:
            'I previously used Redux, but switched to Redux Toolkit because it simplifies state management, reduces boilerplate, and improves code readability.',
    },
    {
        id: v1(),
        icon: git_logo,
        title: 'Git',
        description:
            'I use Git for version control to manage code changes, collaborate with teams, and maintain a clean project history.',
    },
    {
        id: v1(),
        icon: mui_logo,
        title: 'Material UI',
        description:
            'I use Material UI to build consistent and responsive user interfaces with ready-to-use components.',
    },
    {
        id: v1(),
        icon: styled_logo,
        title: 'Styled Components',
        description:
            'I use Styled Components for writing scoped, reusable styles directly in JavaScript, improving maintainability.',
    },
    {
        id: v1(),
        icon: jest_logo,
        title: 'Jest',
        description:
            'I use Jest for unit testing to ensure application stability. On a previous project, I increased overall test coverage from 80% to consistently above 90%.',
    },
    {
        id: v1(),
        icon: css_logo,
        title: 'CSS / SASS',
        description:
            'I use CSS and SASS to create structured, scalable styles with variables and mixins.',
    },
    {
        id: v1(),
        icon: html_logo,
        title: 'HTML',
        description:
            'I use modern HTML standards to build semantic and accessible layouts optimized for browsers.',
    },
];

export default skillsDetails;
