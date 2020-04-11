import React, { useContext } from 'react';
import { AppContext } from 'Context/AppContext';
import ProjectCard from './ProjectCard/ProjectCard';
import './Portfolio.scss';

const Portfolio = (props) => {

  //project array for rendering
  const {projects, newProject} = useContext(AppContext);
  const cards = projects.map((x)=><ProjectCard title={x.title} key={x.title} tags={x.tags} app={x.app} popUp={props.popUp} animColor={x.animColor} scale={x.scale}/>);


  return(
    <div id='portfolio' className='info-section'>
      <div className="header">
        <h1 id='portfolio-header'>Portfolio 💼</h1>
        <p>I'm entirely self-taught, here are some of my projects. Try them! They're fully interactive 🙌</p></div>
      <div id="project-area">
        {cards}
      </div>
    </div>);
}

export default Portfolio;
