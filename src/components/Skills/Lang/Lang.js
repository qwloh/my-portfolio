import React, { useEffect } from 'react';
import Tag from 'Inv/Tag';
import './Lang.scss';

const Lang = (props) => {

  //looping over tags to be rendered
  const langSkill = ['html','css','sass','javascript','react','redux','webpack']; //proficiency level defined in scss

  const langTable = langSkill.map(x=>{
    return(
      <tr key={x}>
      <td className='skills-name'><Tag lang={x} /></td>
      <td className='skills-lvl'><div className={x+'-level'}></div></td>
      </tr>
    );
  });

  //entrance animation
  useEffect(()=>{
      let lvl = document.querySelectorAll('[class*=level]');
      for(let i=0; i<lvl.length; i++){
        let el = lvl[i];
        el.classList.add('loaded');
      }
  });

  return(
    <div className="skills-lang">
      <table>
        <tbody>
        {langTable}
        </tbody>
      </table>
    </div>
  );
}

export default Lang;
