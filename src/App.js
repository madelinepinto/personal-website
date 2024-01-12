import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Experience from './components/pages/Experience';
import Music from './components/pages/Music';
import ContactMe from './components/pages/ContactMe';
import Cookies from './components/pages/Cookies';
import Loader from './components/Loader';


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 4100);
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <Router>
        {loading && <Loader />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;