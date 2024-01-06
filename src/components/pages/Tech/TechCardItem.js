import React from 'react';

function TechCardItem(props) {
  return (
    <>
      <li className='techCards__item' style={{ backgroundColor: props.backgroundColor }}>
        <div className='techCards__item__link'>
          <figure className='techCards__item__pic-wrap' data-category={props.label}>
          </figure>
          <div className='techCards__item__info'>
            <h5 className='techCards__item__text'>{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default TechCardItem;