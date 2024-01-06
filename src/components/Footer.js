import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';


function Footer() {  
  const handleScroll = () => {
      scroll.scrollToTop({ duration: 0 });
  }

  return (
    <div className='footer-container'>
      <section className='footer'>
        <p className='footer-heading'>
          Currently seeking internship opportunities!
        </p>
        <p className='footer-text'>
          Let's stay connected.
        </p>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
          <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/in/madelinepinto/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>            
            <Link
              class='social-icon-link github'
              to='https://github.com/madelinepinto'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>                       
          </div>
        </div>
      </section>
      <section className='footer'>
        <p className='footer-heading'>
          Copyright © Madeline Pinto
        </p>
        <p className='footer-text'>
          <Link to='/cookies' className='footer-text-link' onClick={handleScroll}>
            Cookie Policy
          </Link>
        </p>
      </section>
    </div>
  );
}

export default Footer;