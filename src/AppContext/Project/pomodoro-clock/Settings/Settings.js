import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { clockContext } from '../_inventory/clockContext';
import { INCREMENT, DECREMENT } from '../_inventory/CONSTANTS';
import { Icons } from '../_inventory/Icons';
import './Settings.css';

const Settings = (props) => {
    const {isCounting, breakLength, sessLength, dispatch} = useContext(clockContext);
    const label = (str) => str[0].toUpperCase()+str.slice(1);
    return(
      <div className={'settings'}>
        <div id={props.name+'-label'} className={"label "+props.class}><p>{label(props.name)} Length</p></div>
        <div id={props.name+'-length'} className="length"><p>{props.name ==='session' ? sessLength : breakLength }</p></div>
        <div className="setup">
          <button id={props.name+'-increment'} className="settings-button" disabled={isCounting} onClick={()=>dispatch({type: INCREMENT, target: props.name})}>
            <Icons name='increment' width='6' height='6' fill='#353b48' />
          </button>
          <button id={props.name+'-decrement'} className="settings-button" disabled={isCounting} onClick={()=>dispatch({type: DECREMENT, target: props.name})}>
            <Icons name='decrement' width='6' height='6' fill='#353b48' />
          </button>
        </div>
      </div>
    );
}

Settings.propTypes = {
  name: PropTypes.string.isRequired
};

export default Settings;
