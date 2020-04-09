import React, { useState } from 'react';
import Tag from 'Inv/Tag';
import './ProjectCard.scss';
import Svg from './Svg';

const ProjectCard = (props) => {

  //tags to be rendered in description
  const tagList = props.tags.map(
    (x) => <Tag lang={x} key={x} />
  );

  //jsx
  return (<div className='project-card'>
    <div className="thumbnail">
      {props.app}
      <Svg name='expand' class='expand' width='20' height='20' viewBox='0 0 36 36' stroke='#7f8c8d' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round' popUp={props.popUp} id={props.title}/>
    </div>
    <div className="description">
      <div className='project-title'>
        <p>{props.title}</p>
      </div>
      <div className='tags'>
        <div className='tags-container'>
          {tagList}
        </div>
      </div>
    </div>
  </div>);
}

export default ProjectCard;
