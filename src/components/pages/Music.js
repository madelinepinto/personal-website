import React, { useState, useEffect } from 'react';
import '../../App.css';
import './Music.css'
import Taylor from '../../images/taylor.jpeg';
import Loader from '../Loader';

// This page is not published yet 
// To publish, uncomment lines in Navbar.js and Cards.js
const Music = () => {
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
                <body className="music-container">
                    <h1 className="Header">MUSIC</h1>
                    <h2 className="Subheader">(it's just Taylor Swift)</h2>
                    <div className="music-Section">        
                        <div className="music-TextColumn">
                            <div className="music-TextSection">            
                                <h2 className="music-Subtitle">one more thing ...</h2>
                                <h1 className="music-Title">I love Taylor Swift </h1>
                                <p className="music-Body">
                                    Each page of this website is inspired by one of Taylor's iconic albums. See if you can spot all the easter eggs!
                                    To learn more about my TS obsession, check out my 
                                </p>
                            </div>
                        </div>
                        <div className="music-ImageColumn">
                            <img className="music-Image" src={Taylor} alt="GHC" />
                        </div>
                    </div>
                </body>
            )}
        </div>
    );
}

export default Music;