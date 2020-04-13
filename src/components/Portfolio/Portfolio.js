import React, { useContext, useRef, useEffect } from 'react';
import { AppContext } from 'Context/AppContext';
import ProjectCard from './ProjectCard/ProjectCard';
import './Portfolio.scss';

const Portfolio = (props) => {

  //project array for rendering
  const {projects, newProject} = useContext(AppContext);
  const cards = projects.map((x)=><ProjectCard title={x.title} key={x.title} tags={x.tags} app={x.app} popUp={props.popUp} animColor={x.animColor} scale={x.scale}/>);

  //title entrance animation
  const title = useRef();
  const fadeInObserver = new IntersectionObserver(
  (entries, observer)=>{
    let offset =
    entries.forEach(entry=>{
      if(entry.intersectionRatio > 0){
        // console.log('portfolio observer triggered', entry.target);
        entry.target.classList.remove('init');
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    }
    );
  },
  {
      root:null,
      rootMargin:'0px',
      threshold:0.4
  }
);
  useEffect(()=>fadeInObserver.observe(title.current));

  return(
    <div id='portfolio' className='info-section'>
      <div className="header init" ref={title}>
        <h1 id='portfolio-header'>Portfolio 💼</h1>
        <p>I picked up front end development at freeCodeCamp.org. Here are some of my projects. Try them! They're fully interactive 🙌</p></div>
      <div id="project-area">
        {cards}
      </div>
    </div>);
}

export default Portfolio;
