// Last In First Out
class Node {
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

class Stack {
    constructor(){
        this.head = null;
        this.length = 0;
    }
    // Print values of the stack;
    print(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
        return this;
    }
    // Check value in first node in stack;
    peek(){
        console.log(this.head.val);
        return this;
    }
    // Check if the stack is empty;
    isEmpty(){
        return this.length === 0 ? true : false;
    }
    // Print size of stack;
    size(){
        console.log(this.length);
        return this;
    }
    // Push element first in the stack;
    push(val){
        this.head = new Node(val, this.head);
        this.length++;
        console.log(this.length);
        return this;
    }
    // Remove first element in stack;
    pop(){
        if(this.isEmpty()) return null;
        let oldNode = this.head;
        this.head = this.head.next;
        this.length--;
        console.log(oldNode.val);
        return this;
    }
    // Clear stack;
    clear(){
        this.head = null;
        this.length = 0;
    }
}

let stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.print();