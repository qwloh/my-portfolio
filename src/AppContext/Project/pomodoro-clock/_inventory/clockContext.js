import React, { useReducer, createContext } from 'react';
import { initialState, clockReducer } from './clockReducer';

export const clockContext = createContext();

const ClockContextProvider = (props) => {

  const [clockState, dispatch] = useReducer(clockReducer, initialState);

  return (
    <clockContext.Provider value={{...clockState, dispatch}}>
      {props.children}
    </clockContext.Provider>);
}

export default ClockContextProvider;
