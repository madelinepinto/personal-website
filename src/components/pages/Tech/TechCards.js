import React from 'react';
import './TechCards.css';
import TechCardItem from './TechCardItem';
function TechCards() {
  const tangerine = '#fcc581';
  const aquamarine = '#6eb588';
  const pink = '#ed9aa5';
  const yellow = '#f7db68';
  return (
    <div className='techCards'>
        <div className='techCards__container'>
        <div className='techCards__wrapper'>
          <ul className='techCards__items'>
          <TechCardItem
              src='logos/cpp.png'
              text="C/C++"
              backgroundColor={tangerine} 
            />
            <TechCardItem
              src='logos/java.png'
              text="Java"
              backgroundColor={tangerine} 

            />
            <TechCardItem
              src='logos/python.png'
              text="Python"
              backgroundColor={tangerine} 

            />
            
          </ul>
          <ul className='techCards__items'>
            <TechCardItem
              src='logos/html.png'
              text="HTML"
              backgroundColor={pink}            />
            <TechCardItem
              src='logos/javascript.png'
              text="Java Script"
              backgroundColor={pink}
            />
            <TechCardItem
              src='logos/css.png'
              text="CSS"
              backgroundColor={pink}
            />
            <TechCardItem
              src='logos/react.png'
              text="React"             
              backgroundColor={pink}
            />
            <TechCardItem
              src='logos/tailwindcss.png'
              text="Tailwind CSS"
              backgroundColor={pink}
            />
          </ul>
          <ul className='techCards__items'>
            <TechCardItem
              src='logos/bash.png'
              text="Bash"
              backgroundColor={yellow}
            />
            <TechCardItem
              src='logos/git.png'
              text="Git"
              backgroundColor={yellow}
            />
            <TechCardItem
              src='logos/github.png'
              text="github"
              backgroundColor={yellow}
            />
          </ul>
          <ul className='techCards__items'>
            <TechCardItem
              src='logos/excel.png'
              text="MS Excel"
              backgroundColor={aquamarine}
            />
            <TechCardItem
              src='logos/r.png'
              text="R"
              backgroundColor={aquamarine}
            />
            <TechCardItem
              src='logos/mysql.png'
              text="MySQL"
              backgroundColor={aquamarine}
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default TechCards;