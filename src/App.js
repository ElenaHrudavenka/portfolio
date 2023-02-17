import Header from './Header/Header';
import Main from './Main/Main';
import Skills from './skills/Skills';
import { v1 } from 'uuid';
import Projects from './projects/Projects';
import Freelance from './Freelance/Freelance';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import ContactsContainer from './Contacts/ContactsContainer';

function App() {
  const skills = [
    {
      id: v1(),
      icon: '',
      title: 'JavaScript',
      description:
        'JS is a programming language for developing interactive web pages. You can use native JS features. There are also many JS frameworks that make it easy to create dynamic interfaces for applications.',
    },
    {
      id: v1(),
      icon: '',
      title: 'TypeScript',
      description:
        'I use TypeScript because it makes easier and faster to write complex solutions.  It makes application development, scaling and testing much easier.',
    },
    {
      id: v1(),
      icon: '',
      title: 'REACT',
      description:
        'From my point of view, React is a great solution for SPA development. Using the React library, I can focus on the development of the user interface and application components. React increases development speed, code readability and scalability.',
    },
    {
      id: v1(),
      icon: '',
      title: 'REDUX',
      description:
        'React is often used in conjunction with Redux. It is designed to effectively manage component states. The main advantage of Redux is predictability. Predictability is achieved by using clean functions, actions, and data storage in one place.',
    },
    {
      id: v1(),
      icon: '',
      title: 'CSS / SASS',
      description:
        'Sass allows me to use all css features with convenient structure and also it supports variables and mixins usage. Such code is more convenient to maintain and scale.',
    },
    {
      id: v1(),
      icon: '',
      title: 'HTML',
      description:
        'HTML is evolving, and I try to use all its new features, as it is important for optimization and correct operation of the web application in the browser.',
    },
  ];
  const TodolistDescription =
    "This application serves to plan users' tasks. The authorized user has the ability to create, edit and delete todolists. The application allows to add, edit, delete and change the status of todolist's tasks. Also it is possible to sort tasks by their status. The application has a simple and intuitive user interface. This project is a Single Page Application (SPA). It developed with React/Redux (TypeScript, material-ui, Axios).";
  const TrainingCardsDescription =
    'This application serves for education purposes. It uses training cards as educational material. It has the next functionality: registration, password recovery, profile information changing, card decks sorting and filtering. Also it allows to rate learning progress. Authorized user has the ability to add, edit, remove personal decks and cards, view decks and cards of other users.  During this project development I gained experience in team work. This project is a SPA created using Rect/Redux and TypeScript.';
  const projects = [
    {
      id: v1(),
      image: '',
      projectTitle: 'Todolist',
      description: TodolistDescription,
      link: 'https://elenahrudavenka.github.io/todolist/',
      gitHub: 'https://github.com/ElenaHrudavenka/todolist.git',
    },
    {
      id: v1(),
      image: '',
      projectTitle: 'Training Cards',
      description: TrainingCardsDescription,
      link: 'https://pv18.github.io/project-cards-front',
      gitHub: 'https://github.com/pv18/project-cards-front.git.',
    },
  ];
  return (
    <div>
      <Header />
      <Main />
      <Skills skills={skills} />
      <Projects projects={projects} />
      {/*<Freelance />*/}
      <ContactsContainer />
      <Footer />
    </div>
  );
}

export default App;
