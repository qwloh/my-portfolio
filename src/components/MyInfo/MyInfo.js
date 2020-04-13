import React, {useEffect, useRef} from 'react';
import Svg from './Svg.js';
import './MyInfo.scss';

const MyInfo = (props) => {
  const myInfo = useRef();
  const fadeInObserver = new IntersectionObserver(
  (entries, observer)=>{
    let offset =
    entries.forEach(entry=>{
      if(entry.intersectionRatio > 0){
        console.log(entry.target);
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
  useEffect(()=>fadeInObserver.observe(myInfo.current));

  return (<div id='my-info' className='init' ref={myInfo}>
    <h1>Qiao Wen,<br/>
      <span>Loh</span>
    </h1>
    <div className="description-text">
      <p>Front end web developer</p>
    </div>
    <div className="info-text">
      <Svg name='location' viewBox='0 0 512 512' width='35' height='35' />
      <p>Singapore</p>
    </div>
    <div className="info-text">
      <Svg name='email' viewBox='0 0 512 512' width='35' height='35' />
      <p>
        loh.qwen@gmail.com</p>
    </div>
    <div id='social'>
      <a href='https://www.linkedin.com/in/qwenloh/' title='LinkedIn' target='_blank'><Svg name='linkedIn' viewBox='0 0 512 512' width='30' height='30' fill='#2f3640'/></a>
      <a href='https://github.com/qwen-3108' title='Github' target='_blank'><Svg name='github' viewBox='0 0 24 24' width='30' height='30' fill='#2f3640'/></a>
      <a href='https://codepen.io/qwenloh' title='Codepen' target='_blank'><Svg name='codepen' viewBox='0 0 24 24' width='30' height='30' fill='#2f3640'/></a>
    </div>
  </div>);
}

export default MyInfo;
