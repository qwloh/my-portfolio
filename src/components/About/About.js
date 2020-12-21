import React, { useState, useEffect, useRef } from 'react';
import Svg from './Svg';
import Resume from './Resume.pdf';
import ResumeDoc from './Resume.docx';
import './About.scss';

const About = (props) => {

  //resume button dropdown
  const [isDrop, setDrop] = useState(false);

  //entrance animation
  const section = useRef();
  const fadeInObserver = new IntersectionObserver(
    (entries, observer) => {
      let offset =
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            // console.log('about observer triggered', entry.target);
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
    <div id='about' className='info-section init' ref={section}>
      <div className="header"><h1>About 🔍</h1></div>
      <div className="about-me">
        <div className="paragraph">
          <div className="paragraph-inner">
            <p>I worked as a materials researcher at National University of Singapore before discovering my passion for programming.</p>
            <p>To me, software development is exciting because I enjoy building tools that address people's needs and delivering thoughtful user experience along with the solution.</p>
            <p>I'm most motivated when working on projects that positively impact the world.</p>
            <p>Let's get in touch if you have a project to collaborate!</p>
          </div>
        </div>
        <div className="extra">
          <div id="cause">
            <p className='extra-label'>Cause</p>
            <p>Sustainability, Accessibility, Equality</p>
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
        {/* <div id="resume">
        <p>Resume</p>
        <div id="view">
          <a href={Resume} title='View resume' target='_blank'><Svg name='view' width='20' height='20' viewBox='0 0 512 512' fill='#6c5ce7' /></a>
        </div>
        <div id='download-button' onMouseLeave={()=>setDrop(false)}>
          <p>Download</p>
          <div id="dropdown-arrow" onClick={()=>setDrop(true)} >
            <Svg name='down-arrow' width='10' height='10' viewBox='0 0 213.333 213.333' fill='#fff' />
          </div>
          { isDrop &&
            <div id='download-dropdown'>
              <a href={ResumeDoc} download>Word Doc</a>
              <a href={Resume} download>PDF</a>
            </div>
          }
        </div>
      </div> */}
      </div>
      <div id="icon-credit"><p>
        Icons used on this page are made by <a href="https://www.flaticon.com/authors/mynamepong" target='_blank' title="mynamepong">mynamepong</a>, <a href="https://www.flaticon.com/authors/pongsakornred" target='_blank' title="pongsakornRed">pongsakornRed</a>, <a href="https://www.flaticon.com/authors/pixel-perfect" target='_blank' title="Pixel perfect">Pixel perfect</a>, and by <a href="https://www.flaticon.com/authors/freepik" target='_blank' title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </p></div>
    </div>
  );
}

export default About;
