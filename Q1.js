//Given an array **arr[ ]** of size **N** having elements, the task is to find the next greater element for each element of the array in order of their appearance in the array.Next greater element of an element in the array is the nearest element on the right which is greater than the current element.If there does not exist next greater of current element, then next greater element for current element is -1. For example, next greater of the last element is always -1.

function findNextGreaterElements(arr) {
    const stack = [];
    const output = [];
  
    // Iterate from right to left
    for (let i = arr.length - 1; i >= 0; i--) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
  
      if (stack.length === 0) {
        output.unshift(-1);
      } else {
        output.unshift(stack[stack.length - 1]);
      }
  
      stack.push(arr[i]);
    }
  
    return output;
  }
//You can use this function to find the next greater elements for the given examples:
const arr1 = [1, 3, 2, 4];
const result1 = findNextGreaterElements(arr1);
console.log(result1); // Output: [3, 4, 4, -1]

const arr2 = [6, 8, 0, 1, 3];
const result2 = findNextGreaterElements(arr2);
console.log(result2); // Output: [8, -1, 1, 3, -1]
