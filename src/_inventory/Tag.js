import React from 'react';
import './Tag.scss';

const Tag = (props) => {
  return(
    <code className={props.lang}>{props.lang}</code>
  );
}

export default Tag;
