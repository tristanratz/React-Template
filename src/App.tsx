import React from 'react';
import './App.css';
import { Intro } from './components/intro';
import {About} from "./components/about";
import {Projects} from "./components/projects";
import {Contact} from "./components/contact";

interface State {
    refs: {}
}

interface Props {}

export class App extends React.Component<Props, State>{
    //const accentColor: boolean = true;
    render(): React.ReactNode {
        return (
            <div className="App">
                <Intro/>
                <About/>
                <Projects/>
                <Contact/>
            </div>
        );
    }
}

export default App;
