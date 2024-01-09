import React from 'react';
import './Cards.css';

import CardItem from './CardItem';
import banner from "../images/let-the-games-begin.jpg";
import skills from "../images/skillsCover.jpeg";
import about from "../images/about.PNG";
import contact from "../images/contact.jpg";
import experience from "../images/experience.JPG";

function Cards() {
  return (
    <div className='cards'>
      <img 
        src={banner}
        alt="banner"
        width="100%"
      />
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={about}
              text="Learn about my Reputation"
              label='About'
              path='/about'
            />
            <CardItem
              src={skills}
              text="My Technical Skills (From the Vault)"
              label='Luxury'
              path='/skills'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={experience}
              text="Explore the details of my professional background"
              label='Mystery'
              path='/experience'
            />
            {/* <CardItem
              src='images/about.p'
              text='Listen to my favourite songs'
              label='Adventure'
              path='/Music'
            /> */}
            <CardItem
              src={contact}
              text='Reach out to me!'
              label='Adrenaline'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
