import React from 'react';
import logo from './logo.svg';
import './App.css';
import BaseBtn from "./components/buttons/Buttons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'


import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
{/* 
      <div style={{backgroundColor:"red"}} >  
      <FontAwesomeIcon icon={faCoffee} />
      </div> */}

      <BaseBtn className="btn1" text="Button" icon={ <FontAwesomeIcon icon={faPlus} />} reverse={true} /> &nbsp;
      <BaseBtn className="btn1" text="Button" icon={ <FontAwesomeIcon icon={faPlus} />} /> &nbsp;
      <BaseBtn className="btn1" text={null} icon={ <FontAwesomeIcon icon={faPlus} />} /> &nbsp;
      <BaseBtn className="btn2" text="Button" /> &nbsp;
      <BaseBtn className="btn1-outline" text="Button" /> &nbsp;
      <BaseBtn className="btn1-sm" text="Button" /> &nbsp;
      <BaseBtn className="btn-success" text="Button" />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
