class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    isEmpty(){
        return this.values.length === 0 ? true : false;
    }
    add(value){
        this.values.push(value);
        let index = (this.values.length - 1);
        this.bubbleUp(index);
        return this;
    }
    bubbleUp(idxCurrent){
        if(idxCurrent === 0) return;
        let idxParent = Math.floor((idxCurrent - 1) / 2);
        let parent = this.values[idxParent];
        let current = this.values[idxCurrent];
        if(current > parent){
            this.values[idxParent] = current;
            this.values[idxCurrent] = parent;
            this.bubbleUp(idxParent);
        }
    }
    pullMax(){
        let biggest = this.values[0]
        let lastValue = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = lastValue;
            this.bubbleDown(lastValue, 0);
        }
        return biggest;
    }
    bubbleDown(value, index = 0){
        let leftChildIdx = Math.floor((2 * index) + 1);
        let rightChildIdx = Math.floor((2 * index) + 2);
        if(this.values[leftChildIdx] > this.values[rightChildIdx]){
            if(this.values[leftChildIdx] > value){
                [this.values[index], this.values[leftChildIdx]] = [this.values[leftChildIdx], this.values[index]];
                return this.bubbleDown(value, leftChildIdx)
            }
        }
        if(this.values[rightChildIdx] > this.values[leftChildIdx]){
            if(this.values[rightChildIdx] > value){
                [this.values[index], this.values[rightChildIdx]] = [this.values[rightChildIdx], this.values[index]];
                return this.bubbleDown(value, rightChildIdx)
            }
        }
    }
}

let bh = new MaxBinaryHeap();
bh.add(41);
bh.add(39);
bh.add(33);
bh.add(18);
bh.add(27);
console.log(bh.pullMax());