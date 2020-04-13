import React from 'react';
import PropTypes from 'prop-types';

const Svg = (props) => {

  let icon;

  switch(props.name){
    case 'github':
      icon =  <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"/>;
      break;
    case 'linkedIn':
      icon =<path d="m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-293.464844 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"/>;
      break;
    case 'codepen':
      icon = <path d="m24 7.598c-.044-.264-.08-.47-.36-.641-11.449-6.791-11.287-7.297-12.03-6.848-8.677 5.394-11.092 6.597-11.439 7.017-.315.323-.171.818-.171 8.298-.021.851 7.743 5.462 11.519 8.404.333.237.752.199 1.003-.029 11.224-7.956 11.497-7.636 11.478-8.375 0 0-.012-7.927 0-7.826zm-1.5 6.491-3.876-2.359 3.876-2.697zm-5.277-3.212-4.473-2.722v-6.07l9.126 5.555zm-5.223 3.633-3.876-2.697 3.876-2.359 3.876 2.359zm-.75-12.426v6.074c-1.739 1.079-3.209 1.98-4.451 2.734l-4.675-3.252zm-5.857 9.658c-1.874 1.127-3.098 1.843-3.893 2.32v-5.029zm1.33.924 4.527 3.149v5.999l-9.126-6.349zm6.027 9.149v-5.999l4.527-3.149 4.599 2.799z"/>;
      break;
    case 'location':
      icon =   <g>
        <path d="m448 224a8 8 0 0 0 -8-8 16.019 16.019 0 0 1 -16-16v-25.136a31.966 31.966 0 0 0 24-30.864 8 8 0 0 0 -8-8 16.019 16.019 0 0 1 -16-16v-16a88.1 88.1 0 0 0 -88-88h-48a64.057 64.057 0 0 0 -63.445 56h-16.555a24.027 24.027 0 0 0 -24 24v8a40.047 40.047 0 0 0 40 40h12a4 4 0 0 1 0 8h-12a24 24 0 0 0 0 48h27.648a88.335 88.335 0 0 0 -3.648 25.141v30.745a23.264 23.264 0 0 0 -39.051 24.02l.758 1.9a87.633 87.633 0 0 1 6.293 32.678v85.516a96 96 0 0 0 192 0v-77.757l22.059 5.515a7.861 7.861 0 0 0 1.941.242 8 8 0 0 0 7.156-11.578l-.8-1.594a136.689 136.689 0 0 1 -14.334-59.972 31.965 31.965 0 0 0 23.978-30.856zm-224-40a8 8 0 0 1 0-16h12a20 20 0 0 0 0-40h-12a24.027 24.027 0 0 1 -24-24v-8a8.008 8.008 0 0 1 8-8h24a8 8 0 0 0 8-8 16.019 16.019 0 0 1 16-16h32a16.019 16.019 0 0 1 16 16v22.859a71.534 71.534 0 0 1 -21.086 50.914l-9.141 9.141a88.228 88.228 0 0 0 -15.597 21.086zm.562 91.875-.753-1.9a7.167 7.167 0 0 1 .73-6.782c2.93-4.328 10.188-3.851 12.527.828l1.641 3.282a88.456 88.456 0 0 1 9.293 39.361v33.336a8 8 0 0 0 16 0v-16a24 24 0 0 1 48 0 8.008 8.008 0 0 1 -8 8h-16a8 8 0 0 0 0 16 24.027 24.027 0 0 1 24 24v8a24.041 24.041 0 0 1 -17.031 22.969c.141-.462.209-.953.322-1.427.1-.4.195-.792.27-1.2a23.926 23.926 0 0 0 .439-4.342v-8a24.027 24.027 0 0 0 -24-24h-40v-53.516a103.46 103.46 0 0 0 -7.438-38.609zm39.438 124.125v-16h8a8.008 8.008 0 0 1 8 8v8a8 8 0 0 1 -16 0zm128 0a80 80 0 0 1 -160 0v-16h16v16a24.027 24.027 0 0 0 24 24h16a40.047 40.047 0 0 0 40-40v-8a39.874 39.874 0 0 0 -11.184-27.719 24 24 0 0 0 11.184-20.281 39.75 39.75 0 0 0 -14.1-30.231l8.045-2.011a8 8 0 0 0 6.055-7.758v-19.055l22.422-11.211 9.578 9.578v36.688a8 8 0 0 0 6.059 7.758l25.941 6.485zm24-160a24.027 24.027 0 0 1 -24-24v-32h-16v32a40.063 40.063 0 0 0 32.055 39.2 152.83 152.83 0 0 0 9.968 53.061l-42.023-10.511v-33.75a7.994 7.994 0 0 0 -2.344-5.656l-13.656-13.656v-28.688h-16v27.055l-16 8v-24.617a105.358 105.358 0 0 1 11.332-47.211 120.6 120.6 0 0 0 12.668-53.665v-53.562h-16v53.562a105.358 105.358 0 0 1 -11.332 47.211 120.6 120.6 0 0 0 -12.668 53.665v55.312l-25.487 6.378a39.679 39.679 0 0 0 -22.513 7.985v-70.972a71.534 71.534 0 0 1 21.086-50.914l9.141-9.141a87.365 87.365 0 0 0 25.717-61.086h.056v-24a32.034 32.034 0 0 0 -32-32h-32a33.25 33.25 0 0 0 -3.965.242 47.9 47.9 0 0 1 35.965-16.242h48a72.081 72.081 0 0 1 72 72v16a32.061 32.061 0 0 0 22.582 30.586 16.023 16.023 0 0 1 -14.582 9.414 24.027 24.027 0 0 1 -24-24v-32h-16v32a40.067 40.067 0 0 0 32 39.191v24.809a32.061 32.061 0 0 0 22.582 30.586 16.023 16.023 0 0 1 -14.582 9.414z"/>
      <path d="m248 72h16v16h-16z"/>
      <path d="m336 280h16v16h-16z"/>
      <path d="m344 312h16v16h-16z"/>
      <path d="m336 344h16v16h-16z"/>
      <path d="m368 344h16v16h-16z"/>
      <path d="m352 376h16v16h-16z"/>
      <path d="m368 408h16v16h-16z"/>
      <path d="m336 408h16v16h-16z"/>
      <path d="m352 440h16v16h-16z"/>
      <path d="m320 440h16v16h-16z"/>
      <path d="m288 440h16v16h-16z"/>
      <path d="m256 440h16v16h-16z"/>
      <path d="m64 200h16a48.052 48.052 0 0 1 48-48h56v-16h-56a64.073 64.073 0 0 0 -64 64z"/>
      <path d="m96 200h16a16.019 16.019 0 0 1 16-16h56v-16h-56a32.034 32.034 0 0 0 -32 32z"/>
      <path d="m64 216h16v16h-16z"/>
      <path d="m96 216h16v16h-16z"/>
    </g>;
      break;
    case 'email':
      icon =<g transform='scale(-1 1) translate(-500 0)'>
      <path d="m427.5 351.193a8 8 0 0 0 4.437-6.2l37.5-299.987a18.4 18.4 0 0 0 -26.987-18.488l-398.243 214.438a8 8 0 0 0 4.263 15.03l128.456-7.556 15.123 130.1a33.151 33.151 0 0 0 61.469 13.179l73.5-96.57 92.867 55.72a8 8 0 0 0 7.615.334zm-167.147 5.117 10.258-95.01 42.6 25.561zm16.055-110.195 29.274-32.787-11.936-10.656-35.714 40a8 8 0 0 0 -1.988 4.468l-14 129.669a17.07 17.07 0 0 1 -1.963 6.131l-3.247 4.267a17.118 17.118 0 0 1 -28.891-10.484l-15.474-133.152 141.6-109.237-9.769-12.668-143.233 110.493-97.416 5.73 366.385-197.289a2.4 2.4 0 0 1 3.524 2.415l-35.975 287.8z"/>
      <path d="m287.606 124h162.788v16h-162.788z" transform="matrix(.676 -.737 .737 .676 22.357 314.822)"/>
      <path d="m319.751 380h64.498v16.001h-64.498z" transform="matrix(.496 -.868 .868 .496 -159.518 501.124)"/>
      <path d="m119.716 316h56.569v16h-56.569z" transform="matrix(.707 -.707 .707 .707 -185.754 199.549)"/>
      <path d="m97.479 384h85.041v16h-85.041z" transform="matrix(.659 -.753 .753 .659 -247.201 239.227)"/>
      <path d="m210.817 444h82.365v16h-82.365z" transform="matrix(.486 -.874 .874 .486 -265.501 452.768)"/>
      <path d="m275.056 384h17.889v16h-17.889z" transform="matrix(.447 -.894 .894 .447 -193.624 470.71)"/>
      <path d="m315.056 432h17.889v16h-17.889z" transform="matrix(.447 -.894 .894 .447 -214.445 533.02)"/>
      <path d="m191.71 61.865a8 8 0 0 0 -5.77-5.626l-28.43-7.108-14.355-28.709a8 8 0 0 0 -14.31 0l-14.355 28.709-28.43 7.108a8 8 0 0 0 -3.717 13.418l20.8 20.8-6.9 27.606a8 8 0 0 0 11.339 9.095l28.418-14.214 28.422 14.211a8 8 0 0 0 11.339-9.095l-6.9-27.606 20.8-20.8a8 8 0 0 0 2.049-7.789zm-37.367 20.478a8 8 0 0 0 -2.1 7.6l3.782 15.126-16.443-8.221a8 8 0 0 0 -7.156 0l-16.443 8.221 3.782-15.126a8 8 0 0 0 -2.1-7.6l-14.01-14.009 18.293-4.573a8 8 0 0 0 5.215-4.183l8.837-17.689 8.845 17.689a8 8 0 0 0 5.215 4.183l18.293 4.573z"/>
      </g>;
      break;
    default:
      break;
  }

  return (<svg width={props.width} height={props.height} viewBox={props.viewBox} fill={props.fill} stroke={props.stroke} strokeWidth={props.strokeWidth} strokeLinejoin={props.strokeLineJoin} strokeDashoffset={props.strokeDashOffset} xmlns="http://www.w3.org/2000/svg">
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