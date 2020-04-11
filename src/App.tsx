import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Intro } from './components/intro';
import {About} from "./components/about";


function App() {
  return (
      <div className="App">
        <Intro />
        <About />
      </div>
  );
}

export default App;
