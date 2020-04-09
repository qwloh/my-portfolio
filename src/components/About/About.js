import React from 'react';
import './About.scss';

const About = (props) => {
  return(
    <div id='about' className='info-section'>
    <div className="header"><h1>About</h1></div>
    <div className="about-me">
      <div className="paragraph">
        <div className="paragraph-inner">
          <p>I studied materials engineering and worked as a researcher at National University of Singapore before discovering my passion in web technology.</p>
          <p>To me, web development is exciting because I enjoy building tools that people use and delivering thoughtful user experience. </p>
          <p>Currently, I am mainly interested in data visualization and the accessibility aspect of the web.</p>
          <p>Let's get in touch if you have a project to collaborate!</p>
        </div>
      </div>
      <div className="extra">
        <div id="cause">
          <p className='extra-label'>Cause</p>
          <p>Sustainability, Accessibility</p>
        </div>
        <div id="fan-of">
        <p className='extra-label'>Fan of</p>
        <p>One Piece | Mayday</p>
        </div>
        <div id="enjoy">
          <p className='extra-label'>Enjoy</p>
          <p>Graphic Design | Mobile MOBA</p>
        </div>
      </div>
      <div id="resume">
        <button>PDF Resume</button>
      </div>
    </div>
    </div>
  );
}

export default About;
