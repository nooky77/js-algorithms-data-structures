class Node {
    constructor(value){
        this.left = null;
        this.value = value;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    // Push value into tree. Recursive;
    push(value, current = this.root){
        if(value === current.value) return null;
        if(!current){
            this.root = new Node(value);
            return;
        }
        if(!current.left && value < current.value){
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
    // Push value into tree. Iterative.
    insert(value){
        let newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
        } else {
            let current = this.root;
            while(current){
                if(value === current.value) return null;
                if(value < current.value){
                    if(!current.left){
                        current.left = newNode;
                        break;
                    }
                    current = current.left;
                } else {
                    if(!current.right){
                        current.right = newNode;
                        break;
                    }
                    current = current.right;
                }
            }
        }
        return this;
    }
    // Find if node is in tree and return the node. Recursive.
    find(value, current = this.root){
        if(!current) return false;
        if(current.value === value) return current;
        current = value < current.value ? current.left : current.right;
        return this.find(value, current);
    }
    // Find if node is in tree and return the node. Iterative.
    check(value){
        if(!this.root) return false;
        let current = this.root;
        while(current){
            if(value === current.value) return current;
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }
}

let bss = new BinarySearchTree();
//Recursive test
// bss.push(100)
// bss.push(50)
// bss.push(75)
// bss.push(150)
// bss.push(200)
// bss.push(175)
// Iterative test
bss.insert(100)
bss.insert(50)
bss.insert(75)
bss.insert(150)
bss.insert(200)
bss.insert(175)
console.log(bss.check(1));
// console.log(bss);