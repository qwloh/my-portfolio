import React from 'react';
import PropTypes from 'prop-types';

const Svg = (props) => {

  let icon;

  switch(props.name){
    case 'expand':
      icon = <path d="M3 3H33M3 3V33M3 3L33 33" />;
      break;
    case 'bg-square-m':
      icon = <path fillRule="evenodd" clipRule="evenodd" d="M5 0C2.23859 0 0 2.23859 0 5V25C0 27.7614 2.23859 30 5 30H25C27.7614 30 30 27.7614 30 25V5C30 2.23859 27.7614 0 25 0H5ZM5 3C3.89545 3 3 3.89545 3 5V25C3 26.1046 3.89545 27 5 27H25C26.1046 27 27 26.1046 27 25V5C27 3.89545 26.1046 3 25 3H5Z"/>;
      break;
    default:
      break;
  }

  return (
    <svg className={props.class} width={props.width} height={props.height} viewBox={props.viewBox} fill={props.fill} stroke={props.stroke} strokeWidth={props.strokeWidth} strokeLinecap={props.strokeLinecap} strokeLinejoin={props.strokeLinejoin} strokeDashoffset={props.strokeDashoffset} xmlns="http://www.w3.org/2000/svg">
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
