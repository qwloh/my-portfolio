import React, { useState } from 'react';
import Tag from 'Inv/Tag';
import './ProjectCard.scss';
import Svg from './Svg';

const ProjectCard = (props) => {

  //tags to be rendered in description
  const tagList = props.tags.map(
    (x) => <Tag lang={x} key={x} />
  );

  //trigger pop up when expanded
  let updatePop = props.popUp;
  let parentProject = props.title;

  //trigger hover animation
  const [isHover, setHover] = useState(false);

  //jsx
  return (<div className='project-card' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
    <div className="thumbnail">
      { isHover &&
        <div className="thumbnail-anim">
          <Svg name='bg-square-m' width='32' height ='32' viewBox='0 0 30 30' fill={props.animColor} />
          <Svg name='bg-square-m' width='32' height ='32' viewBox='0 0 30 30' fill={props.animColor} />
        </div>
      }
      <div className={props.scale?'thumbnail-inner':'thumbnail-inner no-scale'}>
        {props.app}
      </div>
      <div className={isHover ? 'expand expand-hover' :'expand'} onClick={()=>{updatePop(parentProject);setHover(false);}}>
        <Svg name='expand' width='14' height='14' viewBox='0 0 36 36' stroke='#fff' strokeWidth='4' strokeLinejoin='round' strokeLinecap='round'/>
      </div>

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
