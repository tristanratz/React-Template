import React from 'react';
import './App.css';
import { Intro } from './components/intro';
import {About} from "./components/about";
import {Projects} from "./components/projects";


function App() {
    const accentColor: boolean = true;
    return (
      <div className="App">
        <Intro />
        <About />
        <Projects />
      </div>
  );
}

export default App;
