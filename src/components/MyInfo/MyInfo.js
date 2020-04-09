import React from 'react';
import Svg from './Svg.js';
import './MyInfo.scss';

const MyInfo = (props) => {
  return (<div id='my-info'>
    <h1>Qiao Wen,<br/>
      <span>Loh</span>
    </h1>
    <div className="description-text">
      <p>Front end web developer</p>
    </div>
    <div className="info-text">
      <Svg name='location' viewBox='0 0 512 512' width='42' height='42' />
      <p>Singapore</p>
    </div>
    <div className="info-text">
      <Svg name='email' viewBox='0 0 512 512' width='42' height='42' />
      <p>
        loh.qwen@gmail.com</p>
    </div>
    <div id='social'>
      <a href='https://www.linkedin.com/in/qwenloh/' target='_blank'><Svg name='linkedIn' viewBox='0 0 512 512' width='35' height='35' fill='#2f3640'/></a>
      <a href='https://github.com/qwen-3108' target='_blank'><Svg name='github' viewBox='0 0 24 24' width='35' height='35' fill='#2f3640'/></a>
      <a href='https://github.com/qwen-3108' target='_blank'><Svg name='codepen' viewBox='0 0 24 24' width='35' height='35' fill='#2f3640'/></a>
    </div>
  </div>);
}

export default MyInfo;
