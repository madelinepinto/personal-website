import React from 'react';
import '../../App.css';
import banner from "../../images/rep-cover.jpg";
import Footer from '../Footer';
import Cards from '../Cards';
// import HeroSection from '../HeroSection';

function Home() {
  return (
    <div className="home-container">
      <img src={banner} alt="banner" width="100%" />
      {/* <HeroSection /> */}
      <Cards />
      <Footer />
    </div>
    
  );
}

export default Home;