import React from 'react';
import Certs from './Certs/Certs';
import Lang from './Lang/Lang';
import './Skills.scss';

const Skills = (props) => {
  return(
    <div id='skills' className='info-section'>
      <div className="header"><h1>Skills and Experience 💻</h1></div>
        <div id="skills-experience-wrapper">
            <div id="lang-skills">
              <h1 className='skills-experience-label'>Skills</h1>
              <Lang />
            </div>
            <div id="experience">
            <h1 className='skills-experience-label'>Experience</h1>
              <Certs title='JavaScript Algorithms and Data Structures' description='' link='javascript-algorithms-and-data-structures'/>
              <Certs title='Front End Libraries' description='' link='front-end-libraries'/>
            </div>
        </div>
    </div>);
}

export default Skills;
