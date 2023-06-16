//Given string **S** representing a postfix expression, the task is to evaluate the expression and find the final value. Operators will only include the basic arithmetic operators like ***, /, + and -**.

function evaluatePostfix(S) {
    const stack = [];
  
    for (let i = 0; i < S.length; i++) {
      const char = S[i];
  
      if (isOperand(char)) {
        stack.push(parseInt(char));
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const result = performOperation(operand1, operand2, char);
        stack.push(result);
      }
    }
  
    return stack.pop();
  }
  
  function isOperand(char) {
    return !isNaN(parseInt(char));
  }
  
  function performOperation(operand1, operand2, operator) {
    switch (operator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        return operand1 / operand2;
      default:
        return 0;
    }
  }
//You can use the evaluatePostfix function to evaluate the given postfix expressions:
const S1 = '231*+9-';
const result1 = evaluatePostfix(S1);
console.log(result1); // Output: -4

const S2 = '123+*8-';
const result2 = evaluatePostfix(S2);
console.log(result2); // Output: -3
