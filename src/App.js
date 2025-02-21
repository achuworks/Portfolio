import './App.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Containers/home';
import About from './Containers/about';
import Contact from './Containers/contact';
import Portfolio from './Containers/portfolio';
import Project from './Containers/project';
import Skills from './Containers/skills';
import Navbar from  './components/navbar';

import NetworkAnimation from './utils/NetworkAnimation';


function App() {
  return (
    <div className="App">
      <Navbar />
      <NetworkAnimation />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/project' element={<Project />} />
        <Route path='/skills' element={<Skills />} />
        
      </Routes>
    </div>
  );
}

export default App;
