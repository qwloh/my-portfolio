import React, { Component } from 'react';
import { mapDispatchToProps } from './memory';
import { connect } from 'react-redux';
import './Buttons.css';

class Buttons extends Component {
  render() {
    const template = [
      {id:"seven",click:this.props.logInput,value:'7', className:"num"},
      {id:"eight",click:this.props.logInput,value:'8', className:"num"},
      {id:"nine",click:this.props.logInput,value:'9', className:"num"},
      {id:"add",click:this.props.logInput,value:'+', className:"oprt"},
      {id:"four",click:this.props.logInput,value:'4', className:"num"},
      {id:"five",click:this.props.logInput,value:'5', className:"num"},
      {id:"six",click:this.props.logInput,value:'6', className:"num"},
      {id:"subtract",click:this.props.logInput,value:'-', className:"oprt"},
      {id:"one",click:this.props.logInput,value:'1', className:"num"},
      {id:"two",click:this.props.logInput,value:'2', className:"num"},
      {id:"three",click:this.props.logInput,value:'3', className:"num"},
      {id:"multiply",click:this.props.logInput,value:'*', className:"oprt"},
      {id:"clear",click:this.props.clearInput,value:'CLR', className:"clear"},
      {id:"zero",click:this.props.logInput,value:'0', className:"num"},
      {id:"decimal",click:this.props.logInput,value:'.', className:"num"},
      {id:"divide",click:this.props.logInput,value:'/', className:"oprt"}
    ];


    const numPad = template.map((x)=>(
      <button id={x.id} className={x.className} onClick={()=>x.click(x.value)} key={x.id}>{x.value}</button>
    ));

    return (
      <div id="button-pad" className='button-pad'>
        <div className="num-pad">
          {numPad}
        </div>
        <div className="enter">
        <button id="equals" onClick={this.props.calcInput}>=</button>
        </div>
      </div>
    );
  }

}

const ConnButtons = connect(null, mapDispatchToProps)(Buttons);
export default ConnButtons;
