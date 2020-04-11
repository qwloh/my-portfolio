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
     scale:true,
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
      project.scale = projects[i].scale;
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
        <div id="app-container" className={project.scale ? '' : 'no-scale'}>
          {project.app}
        </div>
      </div>

      <div id="detail">
        <div id="detail-inner">
          <div id="detail-header">
            <h1>{project.title}</h1>
            <p>{project.moreInfo.description}</p>
          </div>
          <div className='feature-div'>
            <h2 className='feature-title'>⭐ Features</h2>
            <ol>
              {featureList}
            </ol>
          </div>
          <div id="detail-footer">
            <p>Coursework from <a href='https://www.freecodecamp.org/' target='_blank'>freeCodeCamp.org</a>'s' Front End Libraries programme.</p>
            <div className='project-source'>
              <p><a href={project.moreInfo.pageLink} target='_blank'>Github page</a> | <a href={project.moreInfo.repoLink}  target='_blank'>Github repo</a></p>
            </div>
          </div>
          <Svg name='close' className='close' width='16' height='16' viewBox='0 0 329.26933 329' fill='#6c5ce7' closePop={props.closePop}/>
        </div>
      </div>

    </div>
  </div>
);
}

export default PopUp;
