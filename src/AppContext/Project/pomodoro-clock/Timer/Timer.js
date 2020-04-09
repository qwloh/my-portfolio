import React, { useContext } from 'react';
import { clockContext } from '../_inventory/clockContext';
import { START_STOP, COUNTDOWN, RESET } from '../_inventory/CONSTANTS';
import { Icons } from '../_inventory/Icons';
import './Timer.css';

const Timer = () => {
    const { isCounting, isSessBreak, timer, dispatch } = useContext(clockContext);
    if(timer[0]===0 && timer[1]===0){document.getElementById('beep').play();}
    const pomodoro = ()=>{
      if(!isCounting){
        var a = setInterval(()=>{dispatch({type:COUNTDOWN})},1000);
        dispatch({type:START_STOP, func:a});
      }else{
        clearInterval(isCounting);
        dispatch({type:START_STOP, func:false});
      }
    }
    const resetFunc = () => {
        if(isCounting){
          clearInterval(isCounting);
        }
        document.getElementById('beep').pause();
        document.getElementById('beep').currentTime = 0;
        dispatch({type:RESET});
    }
    return(
      <div id="timer">
        <div id="timer-label">
          <p>
            {isSessBreak ? 'Session' : 'Break'}
          </p>
        </div>
        <div id="time-left-box">
          <p id="time-left">{timer[0].toString().padStart(2,'0')+' : '+timer[1].toString().padStart(2,'0')}</p>
        </div>
        <div id="control">
          <button id={START_STOP} className="start-stop" onClick={pomodoro}>
            <Icons name={isCounting? 'stop' :'start'} width='40' height='40' viewBox='0 0 512 512' fill='#3498db' />
          </button>
          <button id={RESET} className="reset" onClick={resetFunc}>
            <Icons name='reset' width='30' height='30' viewBox='0 0 512 512' fill='#3498db'/>
          </button>
        </div>
      </div>
    );
}

export default Timer;

/*          */
