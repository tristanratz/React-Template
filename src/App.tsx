import React from 'react';
import './App.css';
import { Intro } from './components/intro';
import {About} from "./components/about";
import {Projects} from "./components/projects";
import {Contact} from "./components/contact";


function App() {
    //const accentColor: boolean = true;
    return (
      <div className="App">
        <Intro />
        <About />
        <Projects />
        <Contact />
      </div>
  );
}

export default App;
