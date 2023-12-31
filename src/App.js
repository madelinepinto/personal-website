import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Experience from './components/pages/Experience';
import Music from './components/pages/Music';
import ContactMe from './components/pages/ContactMe';


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />        
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Navigate to="/About" />} />
          <Route path='/About' element={<About />} />
          <Route path='/' element={<Navigate to="/Skills" />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/' element={<Navigate to="/Experience" />} />
          <Route path='/Experience' element={<Experience />} />
          <Route path='/' element={<Navigate to="/Music" />} />
          <Route path='/Music' element={<Music />} />
          <Route path='/' element={<Navigate to="/Contact-Me" />} />
          <Route path='/Contact-Me' element={<ContactMe />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;