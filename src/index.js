module.exports = function check(str, bracketsConfig) {
    let openBracket = [],
    closeBraket = [];
for (let i = 0; i < bracketsConfig.length; i++) {
    openBracket[i] = bracketsConfig[i][0];
    closeBraket[i] = bracketsConfig[i][1];
}
    let stack = [];
  for (let m = 0; m < str.length; m ++) {
    let currentSymbol = str[m];

    if (openBracket.includes(currentSymbol)){
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0){
        return false;
      }

      let topElement = stack[stack.length -1];

      if (closeBraket[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}