// Last In First Out
class Stack{
    constructor(val){
        this.stack = [];
        this.count = 0;
    }
    // Print content of stack
    print(){
        this.stack.forEach((ele) => console.log(ele));
        return this;
    }
    // Push value in stack and return index;
    push(val){
        this.stack[this.count] = val;
        this.count++;
        return this;
    }
    // Remove first val in stack and return it;
    pop(){
        if(this.count === 0) return undefined;
        const lastItem = this.stack[this.count - 1];
        this.count--;
        return lastItem;
    }
    // Check top element in stack
    peek(){
        console.log(this.stack[this.count - 1]);
        return this;
    }
    // Clear stack;
    clear(){
        this.stack = [];
        this.count = 0;
        return this;
    }
}

let stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);