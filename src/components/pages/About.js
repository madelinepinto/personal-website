import React, { useState, useEffect } from 'react';
import Loader from '../Loader';
import '../../App.css';
import "./About.css"
import me from '../../images/me.jpg';
import GHC from '../../images/ghc.jpg';

const About = () => {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="about-container">
          <div className="Section">      
            <div className="ImageColumn">
              <img className="Image" src={me} alt="ME!" />
            </div>  
            <div className="TextColumn">
              <div className="TextSection">
                <h1 className="Title">Hi, I'm Madeline</h1>
                <h2 className="Subtitle">It is so nice to meet you !</h2>
                <p className="Body">
                  I am a software developer studying Computer Science at the University of Waterloo.
                  I turn dreams into a reality, one line of code at a time. I promise that you'll never find another like <a className="MeText" href="https://www.youtube.com/watch?v=FuXNumBwDOM&ab_channel=TaylorSwiftVEVO" target="_blank" rel="noopener noreferrer">ME!</a>
                </p>
                <h2 className="Subtitle">A little bit about myself</h2>
                <p className="Body">
                  I love learning all things tech. I have a particular interest in areas like Human Computer Interactions, AI, and Machine Learning.
                  I'm currently learning about data structures, digital hardware, and sequential programs.
                </p>
              </div>
            </div>        
          </div>
          <div className="Section">        
            <div className="TextColumn">
              <div className="TextSection">            
                <h2 className="Subtitle">one more thing ...</h2>
                <h1 className="Title">I love Taylor Swift </h1>
                <p className="Body">
                  In fact, in the year 2023, I listened to 70,000 minutes of Taylor's music. I also travelled over 8,000 km to see her live (it was totally worth it). 
                  Each page of this website is inspired by one of Taylor's iconic albums. See if you can spot all the easter eggs!
                </p>
              </div>
            </div>
            <div className="ImageColumn">
              <img className="Image" src={GHC} alt="GHC" />
            </div>
          </div>
          <iframe
            style={{ borderRadius: 12 }}
            src="https://open.spotify.com/embed/album/1NAmidJlEaVgA3MpcPFYGq?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default About;
