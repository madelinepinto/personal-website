import React, { useState, useEffect } from 'react';
import '../../App.css';
import banner from "../../images/rep-cover.jpg";
import Cards from '../Cards';
import Loader from '../Loader';

const Home = () => {
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
        <>
          <img src={banner} alt="banner" width="100%" style={{ marginBottom: "-9px" }} />
          <Cards />
          <iframe
            className = "rounded-iframe"
            style={{ borderRadius: '12 !important' }}
            src="https://open.spotify.com/embed/album/6DEjYFkNZh67HP7R9PSZvv?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </>
      )}
    </div>    
  );
}

export default Home;