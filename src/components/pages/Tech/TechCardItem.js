import React from 'react';
import { Link } from 'react-router-dom';

function TechCardItem(props) {
  return (
    <>
      <li className='techCards__item' style={{ backgroundColor: props.backgroundColor }}>
        <Link className='techCards__item__link' to={props.path}>
          <figure className='techCards__item__pic-wrap' data-category={props.label}>
            <img
              className='techCards__item__img' 
              alt={`Logo for ${props.text}`}
              src={props.src}
            />
          </figure>
          <div className='techCards__item__info'>
            <h5 className='techCards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default TechCardItem;