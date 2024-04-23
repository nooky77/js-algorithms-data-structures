class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(value, priority){
        this.values.push(new Node(value, priority));
        let index = this.values.length - 1;
        this.bubbleUp(index);
        return this;
    }
    bubbleUp(currentIdx){
        let parentIdx = Math.floor((currentIdx - 1) / 2);
        let parent = this.values[parentIdx];
        if(currentIdx === parentIdx || parentIdx < 0) return;
        let current = this.values[currentIdx];
        if(current.priority < parent.priority){
            let swap = this.values[parentIdx];
            this.values[parentIdx] = this.values[currentIdx];
            this.values[currentIdx] = swap;
            this.bubbleUp(parentIdx);
        }
    }
    dequeue(){
        let priority = this.values[0];
        let last = this.values.pop()
        if(priority === last) return priority;
        this.values[0] = last;
        this.bubbleDown(0);
        return priority;
    }
    bubbleDown(index){
        let values = this.values;
        let leftIdx = Math.floor((2 * index) + 1);
        let rightIdx = Math.floor((2 * index) + 2);
        if(leftIdx > this.values.length || rightIdx > this.values.length) return;
        if(!values[rightIdx] || values[leftIdx].priority < values[rightIdx].priority){
            if(values[leftIdx].priority  <= values[index].priority){
                let swap = values[index];
                values[index] = values[leftIdx];
                values[leftIdx] = swap;
                return this.bubbleDown(leftIdx);
            }
        }
        if(values[rightIdx] && values[rightIdx].priority <= values[leftIdx].priority){
            if(values[rightIdx].priority <= values[index].priority){
                let swap = values[index];
                values[index] = values[rightIdx];
                values[rightIdx] = swap;
                return this.bubbleDown(rightIdx);
            }
        }
    }
}