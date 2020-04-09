import React from 'react';
import PropTypes from 'prop-types';

const Svg = (props) => {

  let icon;
  const parentProject = props.id;
  const updatePop = props.popUp;

  switch(props.name){
    case 'expand':
      icon = <path d="M3 3H33M3 3V33M3 3L33 33" />;
      break;
    default:
      break;
  }

  return (
    <svg className={props.class} width={props.width} height={props.height} viewBox={props.viewBox} fill={props.fill} stroke={props.stroke} strokeWidth={props.strokeWidth} strokeLinecap={props.strokeLinecap} strokeLinejoin={props.strokeLinejoin} strokeDashoffset={props.strokeDashoffset} onClick={()=>updatePop(parentProject)} xmlns="http://www.w3.org/2000/svg">
    {icon}
  </svg>
);
}

Svg.defaultProps = {
  name: '',
  width: '',
  height: '',
  fill:'#000'
}

Svg.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
}

export default Svg;
