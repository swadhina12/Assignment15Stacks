//You are given a stack **St**. You have to reverse the stack using recursion.

class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(element) {
      this.stack.push(element);
    }
  
    pop() {
      if (this.stack.length === 0) {
        return null; // Stack is empty
      }
      return this.stack.pop();
    }
  
    reverseStack() {
      if (this.stack.length <= 1) {
        return;
      }
  
      const top = this.pop();
      this.reverseStack();
      this.insertAtBottom(top);
    }
  
    insertAtBottom(element) {
      if (this.stack.length === 0) {
        this.push(element);
        return;
      }
  
      const top = this.pop();
      this.insertAtBottom(element);
      this.push(top);
    }
  }
//you can use the Stack class to reverse the stack as shown in the examples:
const stack1 = new Stack();
stack1.push(3);
stack1.push(2);
stack1.push(1);
stack1.push(7);
stack1.push(6);

stack1.reverseStack();
console.log(stack1.stack); // Output: [6, 7, 1, 2, 3]

const stack2 = new Stack();
stack2.push(4);
stack2.push(3);
stack2.push(9);
stack2.push(6);

stack2.reverseStack();
console.log(stack2.stack); // Output: [6, 9, 3, 4]
