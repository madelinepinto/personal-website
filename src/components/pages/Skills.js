import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import TechCards from './Tech/TechCards';

function Skils() {    
  return (
    <div className="skills-container">
      <h1 className='skills'>Technical Skills</h1>
      <TechCards />
    </div>    
  );
}

export default Skils;