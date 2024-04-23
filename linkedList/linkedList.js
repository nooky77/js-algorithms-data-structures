class Node {
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
    printList(){
        let current = this.head;
        while(current){
            console.log(current);
            current = current.next;
        }
    }
    push(val){
        if(!this.head){
            this.head = new Node(val);
        }else {
            let current = this.head;
            while (current.next){
                current = current.next;
            }
            current.next = new Node(val);
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head.next){
            this.head = null;
        } else {
            let previous, current;
            current = this.head;
            while(current.next){
                previous = current;
                current = current.next;
            }
            previous.next = null;
        }
        this.length--;
        return this;
    }
    insertFirst(val){
        this.head = new Node(val, this.head);
        this.length++;
        return this;
    }
    insertAt(val, index){
        if(index < 0 || index >= this.length) return;
        let previous, current;
        current = this.head;
        for(let i = 0; i < index; i++){
            previous = current;
            current = current.next;
        }
        previous.next = new Node(val, current);
        this.length++;
        return this;
    }
    deleteFirst(){
        this.head = this.head.next;
        this.length--;
        return this;
    }
    deleteAt(index){
        if(index < 0 || index >= this.length) return;
        else if (index === 0) this.deleteFirst();
        else {
            let previous, current;
            current = this.head;
            for(let i = 0; i < index; i++){
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            this.length--;
        }
        return this;
    }
    getValue(index){
        if(index < 0 || index >= this.length) return;
        let current;
        current = this.head;
        for(let i = 0; i < index; i++){
            current = current.next;
        }
        console.log(current.val);
    }
    getLength(){
        return console.log(this.length);
    }
    clear(){
        this.head = null;
        this.length = 0;
    }
    reverse(){
        let previous, current, next;
        previous = null;
        current = this.head;
        next = this.head;
        while(current !== null){
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
        return this;
    }
    reverse2(current = this.head, previous = null){
        if(!current){
            this.head = previous;
            return previous;
        }
        let next = current.next;
        current.next = previous;
        return this.reverse2(next, current);
    }
}

let ll = new LinkedList();
ll.push(100);
ll.push(200);
ll.push(300);
ll.reverse2();
ll.print();