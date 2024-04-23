// Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures.
// The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph)
// and explores as far as possible along each branch before backtracking.

class Node {
    constructor(value){
        this.left = null;
        this.value = value;
        this.right = null;
    }
}

class Tree {
    constructor(){
        this.root = null;
    }
    push(value, current = this.root){
        if(!current){
            this.root = new Node(value);
            return;
        }
        if(value === current.value) return null;
        if(!current.left && value < current.value) {
            current.left = new Node(value);
            return;
        }
        if(!current.right && value > current.value){
            current.right = new Node(value);
            return;
        }
        current = value < current.value ? current.left : current.right;
        return this.push(value, current);
    }
    // Depth-first search Pre Order
    dfsPreOrder(){
        if(!this.root) return null;
        let found = [];
        let dfsPreOrderHelper = (current, found) => {
            if(!current) return found;
            found.push(current.value);
            if(current.left) dfsPreOrderHelper(current.left, found);
            if(current.right) dfsPreOrderHelper(current.right, found);
        };
        dfsPreOrderHelper(this.root, found);
        return found;
    }
    // Depth-first search Post Order
    dfsPostOrder(){
        if(!this.root) return null;
        let found = [];
        let dfsPostOrderHelper = (current, found) => {
            if(!current) return found;
            if(current.left) dfsPostOrderHelper(current.left, found);
            if(current.right) dfsPostOrderHelper(current.right, found);
            found.push(current.value);
        };
        dfsPostOrderHelper(this.root, found);
        return found;
    }
    // Depth-first search InOrder
    dfsInOrder(){
        if(!this.root) return null;
        let found = [];
        let dfsInOrderHelper = (current, found) => {
            if(!current) return found;
            if(current.left) dfsInOrderHelper(current.left, found);
            found.push(current.value);
            if(current.right) dfsInOrderHelper(current.right, found);
        };
        dfsInOrderHelper(this.root, found);
        return found;
    }
}

let tree = new Tree();
tree.push(10);
tree.push(6);
tree.push(3);
tree.push(8);
tree.push(15);
tree.push(20);
console.log("Pre Order:", tree.dfsPreOrder());
console.log("Post Order:", tree.dfsPostOrder());
console.log("InOrder:", tree.dfsInOrder());