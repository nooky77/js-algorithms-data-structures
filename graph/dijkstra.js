class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(value, priority){
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        let lastIdx = this.values.length - 1;
        if(lastIdx > 0) this.bubbleUp(lastIdx);
        return this;

    }
    bubbleUp(currentIdx){
        let swap;
        let tree = this.values;
        let parentIdx;
        while(true){
            parentIdx = Math.floor((currentIdx - 1) / 2);
            if(parentIdx >= 0 && tree[currentIdx].priority < tree[parentIdx].priority){
                swap = tree[currentIdx];
                tree[currentIdx] = tree[parentIdx];
                tree[parentIdx] = swap;
                currentIdx = parentIdx;
            }else break;
        }
    }
    dequeue(){
        // Get top priority;
        let priority = this.values[0];
        // Set lowest priority at the top of list
        this.values[0] = this.values.pop();
        if(priority === this.values[0]){
            this.values = [];
        } else {
             this.bubbleDown(0);
        }
        return priority;
    }
    bubbleDown(currentIdx){
        let tree = this.values;
        let swap;
        while(true){
            // Set childrens of top node
            let leftIdx = Math.floor((2 * currentIdx) + 1);
            let rightIdx = Math.floor((2 * currentIdx) + 2);
            // Check if index is not out of range
            if(leftIdx < tree.length && rightIdx < tree.length) {
                // Check if left children have a lower priority than father node
                if(tree[leftIdx].priority < tree[rightIdx].priority && tree[leftIdx].priority < tree[currentIdx].priority){
                    swap = tree[leftIdx];
                    tree[leftIdx] = tree[currentIdx];
                    tree[currentIdx] = swap;
                    currentIdx = leftIdx;
                }
                // Check if right children have a lower priority than father node
                else if (tree[rightIdx].priority < tree[leftIdx].priority && tree[rightIdx].priority < tree[currentIdx].priority){
                    swap = tree[rightIdx];
                    tree[rightIdx] = tree[currentIdx];
                    tree[currentIdx] = swap;
                    currentIdx = rightIdx;
                } else break;
            } else break;
        }
    }
}

class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

class WeightedGraph {
    constructor(){
        this.adjancyList = {};
    }
    addVertex(vertex){
        if(!this.adjancyList[vertex]) this.adjancyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight){
        this.adjancyList[vertex1].push({node: vertex2, weight});
        this.adjancyList[vertex2].push({node: vertex1, weight});
    }
    Dijkstra(start, finish){
        let visited = {};
        let previous = {};
        let distances = {};
        let queue = new PriorityQueue();
        let node, candidate;
        for(let node in this.adjancyList){
            if(node === start){
                distances[node] = 0;
                queue.enqueue(node, 0);
            } else {
                distances[node] = Infinity;
                queue.enqueue(node, Infinity);
            }
            previous[node] = null;
            visited[node] = false;
        }
        while(true){
            // Getting lowest priorty node from priority queue
            node = queue.dequeue().value;
            // Checking if current node is equal to finish node, if true we stop the loop;
            if(node === finish) break;
            // Iterating through all neighbor of current node;
            for(let neighbor of this.adjancyList[node]){
                if(!visited[neighbor.node]){
                    // Sum through smallest distance from start to neighbor node;
                    candidate = distances[node] + neighbor.weight;
                    // Checking if candidate route is faster than current distance;
                    if(candidate < distances[neighbor.node]){
                        distances[neighbor.node] = candidate;
                        previous[neighbor.node] = node;
                        queue.enqueue(neighbor.node, candidate);
                    }
                }
            }
            visited[node] = true;
        }
        let fastest = [finish];
        for(let i = 0; i < Object.keys(previous).length; i++){
            if(previous[finish]){
                fastest.push(previous[finish]);
                finish = previous[finish];
            }
        }
        return fastest.reverse();
    }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);
console.log(graph.Dijkstra("A", "E"));