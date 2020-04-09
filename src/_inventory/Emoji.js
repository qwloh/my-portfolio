import React from 'react';

const Emoji = (props) => {
  return(
    <span aria-label={props.label}>{props.symbol}</span>
  );
}

export default Emoji;
