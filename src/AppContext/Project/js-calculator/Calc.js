import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { memory } from './memory';
import ConnDisplay from './Display';
import ConnButtons from './Buttons';
import './Calc.scss';

class Calc extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Provider store={memory}>
        <div id="calculator">
          <ConnDisplay />
          <ConnButtons />
        </div>
      </Provider>
    );
  }

}

export default Calc;
