import React from 'react';
import './TechCards.css';
import TechCardItem from './TechCardItem';

function TechCards() {
  const tangerine = '#fcc581';
  const aquamarine = '#6eb588';
  const pink = '#ed9aa5';
  const yellow = '#f7db68';
  const blue = '#d8b6db';

  return (
    <div className='techCards'>
      <div className='techCards__container'>
        <div className='techCards__wrapper'>
          <div className='techCards__label'>Programming Languages</div>
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
            <TechCardItem
              src='logos/r.png'
              text="Bash"
              backgroundColor={tangerine}
            />         
          </ul>
          <div className='techCards__label'>Web Technologies</div>
          <ul className='techCards__items'>
            <TechCardItem
              src='logos/html.png'
              text="HTML"
              backgroundColor={pink}            
            />
            <TechCardItem
              src='logos/javascript.png'
              text="JavaScript"
              backgroundColor={pink}
            />
            <TechCardItem
              src='logos/css.png'
              text="CSS"
              backgroundColor={pink}
            />
          </ul>            
          <div className='techCards__label'>Text Editors</div>
          <ul className='techCards__items'>
            <TechCardItem
              src='logos/bash.png'
              text="VSCode"
              backgroundColor={yellow}
            />
            <TechCardItem
              src='logos/vim.png'
              text="Vim"
              backgroundColor={yellow}
            />
            <TechCardItem
              src='logos/git.png'
              text="Eclipse"
              backgroundColor={yellow}
            />
            <TechCardItem
              src='logos/github.png'
              text="Notepad++"
              backgroundColor={yellow}
            />            
          </ul>
          <div className='techCards__label'>Web Frameworks and Libraries</div>
          <ul className='techCards__items'>
            <TechCardItem
              src='logos/react.png'
              text="React"             
              backgroundColor={aquamarine}
            />
            <TechCardItem
              src='logos/tailwindcss.png'
              text="TailwindCSS"
              backgroundColor={aquamarine}
            />
            <TechCardItem
              src='logos/qt.png'
              text="QML"
              backgroundColor={aquamarine}
            />            
          </ul>
          <div className='techCards__label'>Version Control</div>
          <ul className='techCards__items'>
            <TechCardItem
              src='logos/bash.png'
              text="Git"
              backgroundColor={blue}
            />
            <TechCardItem
              src='logos/vim.png'
              text="GitHub"
              backgroundColor={blue}
            />
            <TechCardItem
              src='logos/git.png'
              text="GitLab"
              backgroundColor={blue}
            />        
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TechCards;