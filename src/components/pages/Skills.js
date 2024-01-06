import React, { useState, useEffect } from 'react';
import Loader from '../Loader';
import '../../App.css';
import TechCards from './Tech/TechCards';

const Skills = () =>  { 
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
                <div className="skills-container">
                    <h1 className='skills'>Technical Skills</h1>
                    <TechCards />
                    <iframe
                        style={{ borderRadius: 12 }}
                        src="https://open.spotify.com/embed/album/64LU4c1nfjz1t4VnGhagcg?utm_source=generator&theme=0"
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

export default Skills;