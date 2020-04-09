import { INCREMENT, DECREMENT, START_STOP, COUNTDOWN, RESET, SESSION, BREAK } from './CONSTANTS';

//initialState
export const initialState = {
  sessLength: 25,
  breakLength: 5,
  timer: [25, 0],
  isCounting: false,
  isSessBreak: true, //true if sess, false if break
};

//reducer
export const clockReducer = (state, action) => {
  let minutes;
  switch(action.type){
    case INCREMENT:
      switch(action.target){
        case SESSION:
          minutes = state.isSessBreak ? state.sessLength + 1 : state.timer[0];
          return (state.sessLength<60 ? {...state, sessLength: state.sessLength + 1, timer:[minutes,0]} : state);
        case BREAK:
          minutes = state.isSessBreak ? state.timer[0] : state.breakLength + 1 ;
          return (state.breakLength<60 ? {...state, breakLength: state.breakLength + 1, timer: [minutes, 0]} : state);
        default:
          return state;
      }

    case DECREMENT:
      switch(action.target){
        case SESSION:
          minutes = state.isSessBreak ? state.sessLength - 1 : state.timer[0];
          return (state.sessLength>1 ? {...state, sessLength: state.sessLength - 1, timer:[minutes,0]} : state);
        case BREAK:
          minutes = state.isSessBreak ? state.timer[0] : state.breakLength - 1 ;
          return (state.breakLength>1 ? {...state, breakLength: state.breakLength - 1, timer: [minutes, 0]} : state);
        default:
          return state;
      }

    case START_STOP:
      return ({...state, isCounting: action.func});

    case COUNTDOWN:
      if(state.timer[0] === 0 && state.timer[1] === 0){
        return ({...state, isSessBreak: !state.isSessBreak, timer:[state.isSessBreak ? state.breakLength : state.sessLength,0]});
      }else{
        let time = state.timer[0]*60 + state.timer[1];
        time--;
        return ({...state, timer:[Math.floor(time/60), time%60]});
      }
    case RESET:
      return initialState;
    default:
      return state;
  }
}
