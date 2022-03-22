import logo from './logo.svg';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import {useState} from "react";
import {v1} from 'uuid'

function App() {
    const skills = [
        {id: v1(), icon: "", title: "JavaScript", description: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {id: v1(), icon: "", title: "TypeScript", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {id: v1(), icon: "", title: "REACT", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {id: v1(), icon: "", title: "CSS", description: "amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {id: v1(), icon: "", title: "HTML", description: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    ]
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills skills={skills}/>
        </div>
    );
}

export default App;
