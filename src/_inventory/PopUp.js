import React, { useContext, useEffect } from 'react';
import { AppContext } from 'Context/AppContext';
import Svg from './PopUpSvg';
import './PopUp.scss';

const PopUp = (props) => {

  const {projects, newProject} = useContext(AppContext);
  const projectName = props.projectName;
  const project = {
    title: '',
     tags:[],
     app:null,
     moreInfo:{
       description:'',
       features:[],
       pageLink:'',
       repoLink:''
     }
  };
  for(let i=0; i<projects.length; i++){
    if(projects[i].title===projectName){
      project.title = projects[i].title;
      project.tags = [...projects[i].tags];
      project.app = projects[i].app;
      project.moreInfo = { ... projects[i].moreInfo };
      break;
    }
  }

  const featureList = project.moreInfo.features.map((x)=>{
    return (<li>{x}</li>);
  })

  useEffect(()=>{

  });

  return(
    <div id="window">
    <div id='popup-card'>
      <div id="popup-app">
        {project.app}
      </div>
      <div id="detail">
        <div id="detail-inner">
          <h1>{project.title}</h1>
          <p className='popup-fcc'>Coursework from <a href='https://www.freecodecamp.org/' target='_blank'>freeCodeCamp.org</a>'s' Front End Libraries programme</p>
          <div className='description-div'>
          <h2 className='description-title'>DESCRIPTION</h2>
          <p className='popup-description'>{project.moreInfo.description}</p>
          </div>
          <div className='description-div'>
          <h2 className='description-title'>FEATURES</h2>
          <ol>
          {featureList}
          </ol>
          </div>
          <div className='project-source'>
          <p>Github page</p>
          <p>Github repo</p>
          </div>
        </div>
        <Svg name='close' className='close' width='16' height='16' viewBox='0 0 329.26933 329' fill='#bdc3c7' closePop={props.closePop}/>
      </div>
    </div>
  </div>
);
}

export default PopUp;
