// First In First Out
class Node {
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.head === null ? true: false;
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
        return this;
    }
    enqueue(val){
        if(this.isEmpty()){
            let newNode = new Node(val, this.head);
            this.head = newNode;
            this.tail = newNode;
        } else {
            let newNode = new Node(val);
            this.tail.next = newNode
            this.tail = newNode
        }
        return ++this.size;
    }
    dequeue(){
        if(this.isEmpty()) return null;
        let oldHead = this.head;
        if(!this.head.next) {
            this.head = null;
            this.tail = null;
            this.size = 0;
        } else {
            this.head = this.head.next;
            this.size--;
        }
        return oldHead.val;
    }
}

let queue = new Queue();
queue.enqueue("100");
queue.enqueue("200");
queue.enqueue("300");
queue.print();