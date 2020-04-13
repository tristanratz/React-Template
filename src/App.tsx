import React from 'react';
import './App.css';
import { Intro } from './components/intro';
import {About} from "./components/about";


function App() {
    const accentColor: string = "#111921";
    return (
      <div className="App">
        <Intro accentColor={ accentColor } />
        <About accentColor={ accentColor } />
      </div>
  );
}

export default App;
