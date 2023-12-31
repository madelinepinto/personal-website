import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import logo from "../images/mp-white.jpg";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const handleScroll = () => {
        scroll.scrollToTop({ duration: 0 });
        closeMobileMenu();
      };

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
    };   

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);


  return (
    <>
        <nav className ='navbar'>
            <div className='navbar-container'>
                   <Link to='/' className='navbar-logo' onClick={handleScroll}>
                   <img 
                        src={logo}
                        alt="logo"
                        width="60px"
                    />
                   </Link>
                   <div className='menu-icon' onClick={handleClick} >
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                   </div>
                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={handleScroll}> 
                            Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/About' className='nav-links' onClick={handleScroll}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Skills' className='nav-links' onClick={handleScroll}>
                                Skills
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Experience' className='nav-links' onClick={handleScroll}>
                                Experience
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Music' className='nav-links' onClick={handleScroll}>
                                Music
                            </Link>
                        </li>
                        <li className='nav-item'>
                        {button ? (
                        <Link to='/Contact-Me' className='nav-links-mobile' onClick={handleScroll}>
                            Contact Me
                        </Link>
                        ) : (
                        <Link to='/Contact-Me' className='nav-links' onClick={handleScroll}>
                            Contact Me
                        </Link>
                        )}
                        </li>                
                    </ul> 
                    {button && <Button buttonStyle='btn--outline'  buttonSize= 'btn--medium' onClick={handleScroll} >CONTACT ME</Button>}                 
            </div>
        </nav>     
    </>
  )
}

export default Navbar