import React, {Component, useState, useContext} from 'react';
import { CSSTransition } from 'react-transition-group';
import { AppContext } from 'Context/AppContext';
import MyInfo from './components/MyInfo/MyInfo';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import PopUp from 'Inv/PopUp';
import './App.scss';

const App = () => {

  const [isPop, setPop] = useState(false);
  const {projects, newProject} = useContext(AppContext);
  const pop =(id) =>{
    setPop(id);
  }
  const closePop = () => {
    setPop(false);
  }
  return (
    <div id="app">
      <CSSTransition in={!!isPop} unmountOnExit timeout={500} classNames={'popUp'}>
        <PopUp closePop={closePop} projectName={isPop}/>
      </CSSTransition>
      <div id='my-info-wrapper'>
        <MyInfo/>
      </div>
      <div id="more-info-wrapper">
        <Skills/>
        <Portfolio popUp={pop}/>
        <About/>
      </div>
    </div>);

}

export default App;
