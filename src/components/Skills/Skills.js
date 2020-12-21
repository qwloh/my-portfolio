import React, { useEffect, useRef } from 'react';
import Certs from './Certs/Certs';
import Lang from './Lang/Lang';
import './Skills.scss';

const Skills = (props) => {
  //entrance animation
  const section = useRef();
  const fadeInObserver = new IntersectionObserver(
    (entries, observer) => {
      let offset =
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            console.log(entry.target);
            entry.target.classList.remove('init');
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        }
        );
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.4
    }
  );
  useEffect(() => fadeInObserver.observe(section.current));

  return (
    <div id='skills' className='info-section init' ref={section}>
      <div className="header"><h1>Skills and Certificates 💻</h1></div>
      <div id="skills-experience-wrapper">
        <div id="lang-skills">
          <h1 className='skills-experience-label'>Skills</h1>
          <Lang />
        </div>
        <div id="experience">
          <h1 className='skills-experience-label'>Certificates</h1>
          <Certs title='JavaScript Algorithms and Data Structures' description='' link='javascript-algorithms-and-data-structures' />
          <Certs title='Front End Libraries' description='' link='front-end-libraries' />
        </div>
      </div>
    </div>);
}

export default Skills;
