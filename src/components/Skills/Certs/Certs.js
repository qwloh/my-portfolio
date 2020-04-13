import React from 'react';
import Svg from './Svg';
import './Certs.scss';

const Certs = (props) => {
  let certLink = 'https://www.freecodecamp.org/certification/qwen95/'+props.link;
  return(
    <div className='cert-card'>
      <div className="institution">
      <Svg name='fcc' width='60' height='60' viewBox='0 0 712 484' />
      </div>
      <div className="cert-info">
        <div><h1>{props.title}</h1></div>
        <div>{props.description}</div>
        <div><a href={certLink} title={props.title} target='_blank'>Link to certificate</a></div>
      </div>
    </div>);
}

export default Certs;
