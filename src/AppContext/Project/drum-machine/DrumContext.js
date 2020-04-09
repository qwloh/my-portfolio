import React, { createContext, useState } from 'react';

export const DrumContext = createContext();

const DrumContextProvider = (props) => {
    const [state, setState]  = useState(
      {audioBank:
        [{name:'heater-1', key:'Q', src:'./_audioInventory/heater-1.mp3'},
      {name:'heater-2', key:'W', src:'./_audioInventory/heater-2.mp3'},
      {name:'heater-3', key:'E', src:'./_audioInventory/heater-3.mp3'},
      {name:'heater-4', key:'A', src:'./_audioInventory/heater-4.mp3'},
      {name:'open-hh', key:'S', src:'./_audioInventory/open-hh.mp3'},
      {name:'closed-hh', key:'D', src:'./_audioInventory/closed-hh.mp3'},
      {name:'clap', key:'Z', src:'./_audioInventory/clap.mp3'},
      {name:'kick-n-hat', key:'X', src:'./_audioInventory/kick-n-hat.mp3'},
      {name:'kick', key:'C', src:'./_audioInventory/kick.mp3'},
      {name:'chord-1', key:'Q', src:'./_audioInventory/chord-1.mp3'},
      {name:'chord-2', key:'W', src:'./_audioInventory/chord-2.mp3'},
      {name:'chord-3', key:'E', src:'./_audioInventory/chord-3.mp3'},
      {name:'shaker', key:'A', src:'./_audioInventory/shaker.mp3'},
      {name:'open-hh', key:'S', src:'./_audioInventory/open-hh.mp3'},
      {name:'closed-hh', key:'D', src:'./_audioInventory/closed-hh.mp3'},
      {name:'punchy-kick', key:'Z', src:'./_audioInventory/punchy-kick.mp3'},
      {name:'side-stick', key:'X', src:'./_audioInventory/side-stick.mp3'},
      {name:'snare', key:'C', src:'./_audioInventory/snare.mp3'}],
      toggleBank:
        false,
      volume:
        0.8,
      mute:
        false,
      triggered:
        false,
      animState:
        '00'});

    return(
        <DrumContext.Provider value={{...state, setState}}>
          {props.children}
        </DrumContext.Provider>
    );


}

export default DrumContextProvider;
