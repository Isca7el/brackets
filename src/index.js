module.exports = function check(str, bracketsConfig) {

  let openBracket = [],
    closeBracket = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBracket[i] = bracketsConfig[i][0];
    closeBracket[i] = bracketsConfig[i][1];
  }

  let stack = [];

  for (let m = 0; m < str.length; m++) {
    let currentSymbol = str[m];

    if (openBracket.includes(currentSymbol) ){
      if(stack.length > 0){
        let topElement = stack[stack.length - 1];
        let indexTopElement = openBracket.indexOf(topElement);
        let indexCurrentSymbol = closeBracket.indexOf(currentSymbol);
        if(indexCurrentSymbol === indexTopElement){
          stack.pop(topElement);
        } else {
          stack.push(currentSymbol);
        }
      }else {
        stack.push(currentSymbol);
      }

    } else {
      let topElement = stack[stack.length - 1];
      let indexTopElement = openBracket.indexOf(topElement);
      let indexCurrentSymbol = closeBracket.indexOf(currentSymbol);
      if (stack.length === 0) {
        return false;
      }
      if(indexCurrentSymbol === indexTopElement){
        stack.pop(topElement);
      } else {
        stack.push(currentSymbol);
      }
    }
  }

  return stack.length === 0;
}