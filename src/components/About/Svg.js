import React from 'react';
import PropTypes from 'prop-types';

const Svg = (props) => {

  let icon;

  switch(props.name){
    case 'view':
      icon =<path d="m509.796 326.874c-44.857-87.465-142.483-166.874-253.796-166.874-112.094 0-209.436 80.377-253.796 166.874-2.938 5.729-2.938 12.523 0 18.253 44.857 87.464 142.483 166.873 253.796 166.873 126.04 0 218.947-98.922 253.796-166.874 2.938-5.729 2.938-12.523 0-18.252zm-253.796 145.126c-90.776 0-166.974-60.307-212.956-136 45.473-74.855 121.428-136 212.956-136 91.137 0 167.232 60.735 212.956 136-46.194 76.038-122.697 136-212.956 136zm-249.697-360.828c7.39-8.209 20.037-8.871 28.246-1.48l44.544 40.107c8.208 7.392 8.871 20.037 1.48 28.246-7.391 8.21-20.038 8.87-28.246 1.48l-44.544-40.108c-8.208-7.39-8.871-20.036-1.48-28.245zm229.697-11.172v-80c0-11.045 8.954-20 20-20s20 8.955 20 20v80c0 11.045-8.954 20-20 20s-20-8.955-20-20zm-126.8-44.545c-4.493-10.091.045-21.913 10.136-26.406 10.092-4.493 21.913.045 26.406 10.136l30.587 68.7c4.493 10.09-.045 21.913-10.136 26.406-10.062 4.479-21.898-.014-26.406-10.136zm322.227 122.59c-7.391-8.208-6.729-20.854 1.48-28.246l44.544-40.107c8.208-7.391 20.855-6.729 28.246 1.48 7.391 8.208 6.729 20.854-1.48 28.245l-44.544 40.108c-8.211 7.392-20.856 6.727-28.246-1.48zm-95.757-70.16 30.587-68.7c4.493-10.091 16.315-14.629 26.406-10.136s14.629 16.315 10.136 26.406l-30.587 68.699c-4.513 10.137-16.36 14.609-26.406 10.137-10.09-4.493-14.628-16.315-10.136-26.406zm-79.67 129.865c-54.175 0-98.25 44.075-98.25 98.25s44.075 98.25 98.25 98.25 98.25-44.075 98.25-98.25-44.075-98.25-98.25-98.25zm0 156.5c-32.119 0-58.25-26.131-58.25-58.25s26.131-58.25 58.25-58.25 58.25 26.131 58.25 58.25-26.131 58.25-58.25 58.25z"/>;
      break;
    case 'down-arrow':
      icon =<polygon points="0,53.333 106.667,160 213.333,53.333" />;
      break;
    default:
      break;
  }

  return (<svg width={props.width} height={props.height} viewBox={props.viewBox} fill={props.fill} stroke={props.stroke} strokeWidth={props.strokeWidth} strokeLinejoin={props.strokeLinejoin} strokeDashoffset={props.strokeDashoffset} xmlns="http://www.w3.org/2000/svg">
    {icon}
  </svg>);
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