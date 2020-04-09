import React, { useEffect } from 'react';
import Tag from 'Inv/Tag';
import './Lang.scss';

const Lang = (props) => {

  //looping over tags to be rendered
  const langSkill = [
    {lang:'html', prof:10},
    {lang:'css', prof:10},
    {lang:'sass', prof:8},
    {lang:'javascript', prof:10},
    {lang:'react', prof:9},
    {lang:'redux', prof:7},
    {lang:'webpack', prof:7}]; //need to cross-update prof value in scss file for now

  const langTable = langSkill.map((x)=>{
    return(
      <tr key={x.lang}>
      <td><Tag lang={x.lang} /></td>
      <td className='skills-lvl'><div className={x.lang+'-level'}></div></td>
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
