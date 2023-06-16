//Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

class MinStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(val) {
      this.stack.push(val);
      if (this.minStack.length === 0 || val <= this.getMin()) {
        this.minStack.push(val);
      }
    }
  
    pop() {
      const popped = this.stack.pop();
      if (popped === this.getMin()) {
        this.minStack.pop();
      }
    }
  
    top() {
      return this.stack[this.stack.length - 1];
    }
  
    getMin() {
      return this.minStack[this.minStack.length - 1];
    }
  }
//You can use the MinStack class to perform the stack operations as shown in the example:
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Output: -3
minStack.pop();
console.log(minStack.top());    // Output: 0
console.log(minStack.getMin()); // Output: -2
