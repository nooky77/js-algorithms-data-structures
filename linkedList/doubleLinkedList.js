class Node {
    constructor(prev = null, val, next = null){
        this.prev = prev;
        this.val = val;
        this.next = next;
    }
}

class DLL {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Print all node values in the list;
    print(){
        let current = this.head;
        for(let i = 0; i < this.length; i++){
            console.log(current.val);
            current = current.next;
        }
    }
    // Push new node at the end of the list;
    push(val){
        if(!this.head){
            this.head = new Node(null, val);
            this.tail = this.head;
        } else {
            let lastNode = this.tail;
            let newNode = new Node(lastNode, val, null);
            lastNode.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // Remove last node in the list;
    pop(){
        if(!this.head) return undefined;
        if(!this.head.next){
            this.head = null;
            this.tail = null;
        } else {
            let previous = this.tail.prev;
            this.tail = previous;
        }
        this.length--;
        return this;
    }
    // Add node to the start of the list;
    unshift(val){
        if(!this.head) {
            this.head = new Node(null, val, this.head);
            this.tail = this.head;
        } else {
            let oldHead = this.head;
            this.head = new Node(null, val, oldHead);
            oldHead.prev = this.head;
        }
        this.length++;
        return this;
    }
    // Remove 1st node in the list;
    shift(){
        if(!this.head) return undefined;
        if(!this.head.next){
            this.head = null;
            this.head = null;
        } else {
            let oldNode = this.head;
            this.head = oldNode.next;
            this.head.prev = null;
        }
        this.length--;
        return this;
    }
    // Get node at index;
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let half = Math.floor(this.length / 2);
        let current;
        if(index < half){
            current = this.head;
            for(let i = 0; i < index; i++){
                current = current.next;
            }
        } else {
            current = this.tail;
            for(let i = this.length - 1; i > index; i--){
                current = current.prev;
            }
        }
        return current;
    }
    // Set value at index;
    set(val, index){
        let foundNode = this.get(index);
        if(!foundNode) return undefined;
        foundNode.val = val;
        return this;
    }
    // Insert node at index;
    insert(val, index){
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);
        let foundNode = this.get(index);
        if(!foundNode) return undefined;
        let previousNode = foundNode.prev;
        let newNode = new Node(previousNode, val, foundNode);
        foundNode.prev = newNode;
        previousNode.next = newNode;
        this.length++;
        return this;
    }
    // Remove node at index;
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let foundNode = this.get(index);
        let previousNode = foundNode.prev;
        let nextNode = foundNode.next;
        previousNode.next = nextNode;
        nextNode.prev = previousNode;
        this.length--;
        return this;
    }
    // Reverse DLL;
    reverse(){
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let previous = this.head;
        let next;
        while(current){
            next = current.next;
            current.next = previous;
            current.prev = next;
            previous = current;
            current = next;
        }
        return this;
    }
}

const dll = new DLL();
dll.push(100);
dll.push(200);
dll.push(300);
dll.push(400);
dll.push(500);
dll.reverse();
dll.print();