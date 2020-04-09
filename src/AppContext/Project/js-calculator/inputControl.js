/*Enabling selective logging of user input*/

const inputControl = (numStr, state) => {
  const {
    input:inp , output:out
  } = state;
  const zeroRegex = /[+/*-]0$/;
  const opRegex = /[+/*-]/;
  const decimalRegex =/\.\d*$/;

  let input;
  let output;

  switch ( inp[ inp.length - 1]) {

    case '=': //Previous input was equal button
      input = opRegex.test(numStr) ? out + numStr : numStr;
      output = numStr;
      break;

    case '+':
    case '-':
    case '*':
    case '/': //Previous input was an operator
      input = inp+numStr;
      output = numStr;
      break;

    case '0': //Previous input was 0
      if(zeroRegex.test(inp)||inp==='0'){
        input = (numStr==='0')? inp:inp.slice(0, inp[inp.length-1])+numStr;
        output = (numStr==='0')? out:out.slice(0, out[out.length-1])+numStr;
      }else{
        input = inp+numStr;
        output = out+numStr;
      }
      break;

    default: //Previous input was 1-9 or decimal
      if(decimalRegex.test(inp)&&numStr==='.'){
        input=inp;
        output=out;
        break;
      }else{
        input = inp+numStr;
        output = opRegex.test(numStr)? numStr : out+numStr;
      }

  }

  return {
    inp: input,
    out: output,
  };

}

export default inputControl;

/*Testing
compute('-5-5');
compute('-5--5');
compute('5/-5');
compute('5+5+');*/


/*case '.': //Previous input was decimal character
  if(numStr==='.'||(opRegex.test(numStr)&&opRegex.test(inp[inp.length-2]))){
    input = inp;
    output = out;
  }else{
    input = inp+numStr;
    output = opRegex.test(numStr)? numStr : out+numStr;
  }
  break;*/
