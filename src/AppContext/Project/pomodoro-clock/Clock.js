import React from 'react';
import ClockContextProvider from './_inventory/clockContext';
import {SESSION, BREAK} from './_inventory/CONSTANTS';
import Settings from './Settings/Settings';
import Timer from './Timer/Timer';
import alarm from './alarm-cut.mp3';
import './Clock.scss';

const Clock = () => {
  return (<ClockContextProvider>
    <div id="clock">
      <div id="head">
        <div id="title">
          <h1>Pomodoro Clock</h1>
        </div>
        <div id="setting">
          <div id="setting-inner">
        < Settings name={SESSION} class={'sess'}/>
        < Settings name={BREAK} class={'break'} />
        </div>
        </div>
      </div>
      <div id="content">
        < Timer/>
      </div>
    </div>
    <audio id="beep" src={alarm}></audio>
  </ClockContextProvider>);
}

export default Clock;
