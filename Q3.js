//Implement a Stack using two queues **q1** and **q2**.

class Stack {
    constructor() {
      this.q1 = [];
      this.q2 = [];
    }
  
    push(x) {
      // Move all elements from q1 to q2
      while (this.q1.length > 0) {
        this.q2.push(this.q1.shift());
      }
  
      // Push the new element into q1
      this.q1.push(x);
  
      // Move back all elements from q2 to q1
      while (this.q2.length > 0) {
        this.q1.push(this.q2.shift());
      }
    }
  
    pop() {
      if (this.q1.length === 0) {
        return -1; // Stack is empty
      }
  
      // Remove and return the top element from q1
      return this.q1.shift();
    }
  }
//You can use this Stack class to perform the stack operations as shown in the examples:
const stack = new Stack();

stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
stack.push(4);
console.log(stack.pop()); // Output: 4

// Clear the stack for the next example
stack.q1 = [];
stack.q2 = [];

stack.push(2);
console.log(stack.pop()); // Output: 2
console.log(stack.pop()); // Output: -1 (stack is empty)
stack.push(3);
console.log(stack.pop()); // Output: 3
