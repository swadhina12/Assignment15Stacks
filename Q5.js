//You are given a string **S**, the task is to reverse the string using stack.

function reverseString(S) {
    const stack = [];
    for (let i = 0; i < S.length; i++) {
      stack.push(S[i]);
    }
  
    let reversedString = '';
    while (stack.length > 0) {
      reversedString += stack.pop();
    }
  
    return reversedString;
  }
//You can use the reverseString function to reverse the given string:
const S = 'GeeksforGeeks';
const reversed = reverseString(S);
console.log(reversed); // Output: skeeGrofskeeG
