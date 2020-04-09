import React, { useEffect, useContext } from 'react';
import { DrumContext } from './DrumContext';
import Display from './Display/Display';
import DrumPad from './DrumPad/DrumPad';
import Switch from './Switch/Switch';
import Volume from './Volume/Volume';
import ToggleBank from './ToggleBank/ToggleBank';
import { keyAction } from './keyAction';
import './Drum.scss';

const Drum = (props) => {

  const { setState, volume, mute, toggleBank, animState, ...state } = useContext(DrumContext);

  useEffect(()=>{
    focus();
    var audioClip = document.getElementsByTagName('audio');
    for(let i=0; i<audioClip.length; i++){
      audioClip[i].volume = volume;
    }
  });

  const keyHandler =(e)=> {
    let id = e.key;
    let newState = keyAction(id, volume, mute, toggleBank, animState);
    setState({...newState, ...state});
  }

  return(
    <div id="drum-machine-wrapper">
    <div id="drum-machine" className={mute?'disable':'enable'} onKeyDown={keyHandler} tabIndex="0">
      <DrumPad />
      <div id="meta">
        <Volume />
        <ToggleBank />
        <Switch />
        <Display />
      </div>
    </div>
    </div>
  );
}

export default Drum;
