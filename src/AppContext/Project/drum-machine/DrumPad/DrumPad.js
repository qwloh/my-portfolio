import React, { useContext } from 'react';
import { DrumContext } from '../DrumContext';
import './DrumPad.scss';

const DrumPad = () =>{
  const { audioBank, toggleBank, mute, animState, setState, volume } = useContext(DrumContext);

  const clickHandler = (e) => {
    if(!mute){
      let str = e.currentTarget.id;
      let id = e.currentTarget.children[0].id;
      document.getElementById(id).play();
      let mapStr = str.match(/\w+/g);
      let formatStr = mapStr.map((x)=>x[0].toUpperCase()+x.slice(1));
      document.getElementById('drum-display').innerHTML = formatStr.join(' ');
      if(animState.includes(id)){
        document.getElementById('backup-inner'+id).classList.add('animation-inner');
        document.getElementById('backup-outer'+id).classList.add('animation-outer');
        setState({audioBank:audioBank, toggleBank:toggleBank, mute:mute, animState:animState.slice(1)+'0', volume:volume});
      }else{
        document.getElementById('inner'+id).classList.add('animation-inner');
        document.getElementById('outer'+id).classList.add('animation-outer');
        setState({audioBank:audioBank, toggleBank:toggleBank, mute:mute, animState:animState.slice(1)+id, volume:volume});
      }
    }
  }

  const animResetInner = (e) => {
      // console.log('clearInner', e.target.id);
      document.getElementById(e.target.id).classList.remove('animation-inner');
  }

  const animResetOuter = (e) => {
      // console.log('clearInner', e.target.id);
      document.getElementById(e.target.id).classList.remove('animation-outer');
  }

  let sliced = toggleBank ? audioBank.slice(0, 9) : audioBank.slice(9, 19) ;
  let toRender = sliced.map((x)=>{
    return(
      <div key={x.key} className='grid-item'>
        <svg id={'inner'+x.key} height='24' width='24' fill='pink' onAnimationEnd={animResetInner}>
          <circle r='12' cx='12' cy='12'/>
        </svg>
        <svg id={'outer'+x.key} height='24' width='24' fill='pink' onAnimationEnd={animResetOuter}>
          <circle r='12' cx='12' cy='12'/>
        </svg>
        <svg id={'backup-inner'+x.key} height='24' width='24' fill='pink' onAnimationEnd={animResetInner}>
          <circle r='12' cx='12' cy='12'/>
        </svg>
        <svg id={'backup-outer'+x.key} height='24' width='24' fill='pink' onAnimationEnd={animResetOuter}>
          <circle r='12' cx='12' cy='12'/>
        </svg>
        <div id={x.name} className="drum-pad" onClick={clickHandler}>
          <audio id={x.key} className="clip" src={require(`${x.src}`).default}></audio>
          <p>{x.key}</p>
        </div>
      </div>
    );
  });

  return(
    <div id="pad">
      {toRender}
    </div>);
}

export default DrumPad;
