import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./skills/Skills";
import {v1} from 'uuid'
import Projects from "./projects/Projects";
import Freelance from "./Freelance/Freelance";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
    const skills = [
        {
            id: v1(),
            icon: "",
            title: "JavaScript",
            description: "JS is a programming language for developing interactive web pages. You can use native JS capabilities. There are also many JS frameworks that make it easy to create a dynamic interface for applications."
        },
        {
            id: v1(),
            icon: "",
            title: "TypeScript",
            description: "I'm using TypeScript because it makes easier and faster to write complex solutions. In the future that allows will be easier to develop, expand and test application."
        },
        {
            id: v1(),
            icon: "",
            title: "REACT",
            description: "In my opinion, React is an excellent solution for SPA development. Using the React.js library, I can focus on the user interface and application components. The use of React improves development speed, code readability and scalability."
        },
        {
            id: v1(),
            icon: "",
            title: "REDUX",
            description: "React is often used in conjunction with Redux. It is designed to effectively manage component states. The main advantage of Redux is predictability. It is based on the use of clean features, action and data storage in one place."
        },
        {
            id: v1(),
            icon: "",
            title: "CSS / SASS",
            description: "Sass allows me to use all css functions with convenient structure, ability to use variables and mixins. This code is more convenient to maintain and expand."
        },
        {
            id: v1(),
            icon: "",
            title: "HTML",
            description: "HTML is the basis of any web-application. It develops and I try to use all its new features, as it is important for optimization and correct operation of the web-application in the browser."
        },
    ]
    const TodolistDescription = 'This project is a SPA created using Rect/Redux (with TypeScript, material-ui, Axios). Authorized user has the ability to add, edit, delete and change task status in todolist. There is a possibility of sorting by task status. In the application the ability to compose, edit and delete todolists. The application has a simple and intuitive UI.';
    const TrainingCardsDescription = 'This project is a SPA created using Rect/Redux and TypeScript. Authorized user has the ability to add, edit and delete personal cards and view cards of other users. Ability to register, recover password, change profile data, perform sorting and evaluate learning progress. Working on this project, I gained experience in team work.';
    const projects = [
        {id: v1(),
            image: '',
            projectTitle: "Todolist",
            description: TodolistDescription,
            link: "https://elenahrudavenka.github.io/todolist/",
            gitHub: 'https://github.com/ElenaHrudavenka/todolist.git',
        },
        {id: v1(),
            image: '',
            projectTitle: "Training Cards",
            description: TrainingCardsDescription,
            link: "https://pv18.github.io/project-cards-front",
            gitHub: 'https://github.com/pv18/project-cards-front.git.',
        },
    ]
    return (
        <div>
            <Header/>
            <Main/>
            <Skills skills={skills}/>
            <Projects projects={projects}/>
            {/*<Freelance />*/}
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
