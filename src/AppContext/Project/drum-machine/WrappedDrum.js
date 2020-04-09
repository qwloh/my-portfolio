import React  from 'react';
import DrumContextProvider from './DrumContext';
import Drum from './Drum';

const WrappedDrum = (props) => {

  return(
    <DrumContextProvider>
      <Drum />
    </DrumContextProvider>
  );
}

export default WrappedDrum;
