import React from 'react';
import './Cards.css'; // Commenting out this line

import CardItem from './CardItem';
import banner from "../images/let-the-games-begin.jpg";
import skills from "../images/skills-cover.jpeg";

console.log('Cards component loaded');

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
              src='images/img-9.jpg'
              text="Learn about Madeline's Reputation"
              label='About'
              path='/About'
            />
            <CardItem
              src={skills}
              text="Madeline's Technical Skills (From the Vault)"
              label='Luxury'
              path='/Skills'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text="Explore the details of my professional background"
              label='Mystery'
              path='/Experience'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Listen to my favourite songs'
              label='Adventure'
              path='/Music'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Reach out to me!'
              label='Adrenaline'
              path='/Contact-me'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
