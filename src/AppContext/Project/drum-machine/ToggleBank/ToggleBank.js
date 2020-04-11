import React, { useContext } from 'react';
import { DrumContext } from '../DrumContext';
import Svg from '../Svg';
import './ToggleBank.css';

const ToggleBank = () =>{
  const { setState, toggleBank, mute, ...state } = useContext(DrumContext);
  const toggle =(e) => {
    if(!mute){
      let newBank = Number(e.target.value) ? true : false;
      setState({toggleBank:newBank, mute:mute, ...state});
      document.getElementById('drum-display').innerHTML = toggleBank ? 'Smooth Piano Kit' : 'Heater Kit';
    }
  }
  return(
    <div id="toggle-bank">
      <div id="bank-icon">
        <Svg name='toggle' width='14' height='14' viewBox='-44 -44 600 600' fill={mute?'#7f8c8d':'#ED4C67'} />
        <p>SHIFT</p>
      </div>
      <input type="range" min="0" max="1" step="1" value={toggleBank?1:0} onChange={toggle}/>
    </div>
  );

}

export default ToggleBank;
