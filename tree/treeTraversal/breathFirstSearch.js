// Breadth-first search (BFS) is an algorithm for searching a tree data structure for a node that satisfies a given property.
// It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level.

class Node {
    constructor(value){
        this.left = null;
        this.value = value;
        this.right = null;
    }
}

class Stack {
    constructor(data){
        this.data = data;
    }
}

class Queue {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    enqueue(val){
        let newStack = new Stack(val);
        if(this.isEmpty()){
            this.top = newStack;
            this.bottom = newStack;
        } else {
            let oldBottom = this.bottom;
            this.bottom = newStack;
            oldBottom.next = this.bottom;
        }
        this.size++;
        return this;
    }
    dequeue(){
        if(this.isEmpty()) return null;
        let oldTop = this.top;
        if(!this.top.next){
            this.top = null;
            this.bottom = null;
        } else {
            this.top = oldTop.next;
        }
        this.size--;
        return oldTop;
    }
}

class Tree {
    constructor(){
        this.root = null;
    }
    // Push value into tree;
    push(value, current = this.root){
        let newNode = new Node(value);
        if(!current){
            this.root = newNode;
            return;
        }
        if(value === current.value) return false;
        if(!current.left && value < current.value){
            current.left = newNode;
            return;
        }
        if(!current.right && value > current.value){
            current.right = newNode;
            return
        }
        current = value < current.value ? current.left : current.right;
        return this.push(value, current);
    }
    // BreathFirstSearch Iteration
    bfs(){
        if(!this.root) return null;
        let current;
        let found = [];
        let queue = new Queue();
        queue.enqueue(this.root);
        while(!queue.isEmpty()){
            current = queue.dequeue();
            if(current.data.left) queue.enqueue(current.data.left);
            if(current.data.right) queue.enqueue(current.data.right);
            found.push(current.data.value);
        }
        return found;
    }
    // BreathFirstSearch Recursion
    bfs2Heleper(){
        if(!this.root) return null;
        let queue = new Queue();
        let found = [];
        let node = this.root;
        queue.enqueue(node);
        this.bfs2(queue, found);
        return found;
    }
    bfs2(queue, found){
        if(queue.isEmpty()) return found;
        let current = queue.dequeue();
        found.push(current.data.value);
        if(current.data.left) queue.enqueue(current.data.left)
        if(current.data.right) queue.enqueue(current.data.right)
        return this.bfs2(queue, found);
    }
}

let tree = new Tree();
tree.push(10);
tree.push(6);
tree.push(3);
tree.push(8);
tree.push(15);
tree.push(20);
console.log(tree.bfs2Heleper());