import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import {v1} from 'uuid'
import Projects from "./projects/Projects";
import Freelance from "./freelance/Freelance";
import Contacts from "./contact/Contacts";
import Footer from "./footer/Footer";

function App() {
    const skills = [
        {
            id: v1(),
            icon: "",
            title: "JavaScript",
            description: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: v1(),
            icon: "",
            title: "TypeScript",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: v1(),
            icon: "",
            title: "REACT",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: v1(),
            icon: "",
            title: "CSS",
            description: "amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: v1(),
            icon: "",
            title: "HTML",
            description: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
    ]
    const projects = [
        {id: v1(), image: '', projectTitle: "Todolist", description: "ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electr", link: ""},
        {id: v1(), image: "", projectTitle: "Social Network", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less", link: ""},
    ]
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills skills={skills}/>
            <Projects projects={projects}/>
            <Freelance />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
