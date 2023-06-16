//Given an array a of integers of length n, find the nearest smaller number for every element such that the smaller element is on left side.If no small element present on the left print -1.
function findNearestSmallerElements(a) {
    const stack = [];
    const output = [];
  
    // Iterate through the array
    for (let i = 0; i < a.length; i++) {
      while (stack.length > 0 && stack[stack.length - 1] >= a[i]) {
        stack.pop();
      }
  
      if (stack.length === 0) {
        output.push(-1);
      } else {
        output.push(stack[stack.length - 1]);
      }
  
      stack.push(a[i]);
    }
  
    return output;
  }
//You can use this function to find the nearest smaller elements for the given examples:
const a1 = [1, 6, 2];
const result1 = findNearestSmallerElements(a1);
console.log(result1); // Output: [-1, 1, 1]

const a2 = [1, 5, 0, 3, 4, 5];
const result2 = findNearestSmallerElements(a2);
console.log(result2); // Output: [-1, 1, -1, 0, 3, 4]
