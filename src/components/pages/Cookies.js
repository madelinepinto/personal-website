import React from 'react';
import '../../App.css';
import './Cookies.css';
import Taylor from '../../images/taylor.jpeg';

// Sample images (replace these with your actual image URLs)
const imageUrls = [  
  
];

const cookieImages = Array.from({ length: 20 }, (_, index) => `/images/Cookies%20(${index + 1}).jpg`);

const Cookies = () => {
  return (
    <div className="cookies-container">
      <h1 className="Header">Cookies</h1>

      
      <div className="image-gallery">
        {cookieImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Cookies (${index + 1})`}
            className="gallery-image"
          />
        ))}
      </div>
      <iframe
        style={{ borderRadius: 12 }}
        src="https://open.spotify.com/embed/album/1fnJ7k0bllNfL1kVdNVW1A?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

    </div>
  );
};

export default Cookies;
