class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        this.adjacencyList[vertex] = [];
        return this;
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        return this;
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((ele) => ele !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((ele) => ele !== vertex1);
        return this;
    }
    removeVertex(vertex){
        this.adjacencyList[vertex].forEach(ele => {
            this.removeEdge(vertex, ele);
        });
        delete this.adjacencyList[vertex];
        return this;
    }
    depthFirstRecursive(vertex, visited = []){
        visited.push(vertex);
        this.adjacencyList[vertex].forEach(neighbor => {
            if(!visited.includes(neighbor)){
                return this.depthFirstRecursive(neighbor, visited);
            }
        });
        return visited;
    }
    depthFirstIterative(vertex){
        let stack = [vertex];
        let visited = [];
        while(stack.length > 0){
            let current = stack.pop();
            visited.push(current);
            for(let neighbor of this.adjacencyList[current]){
                if(!stack.includes(neighbor)){
                    if(!visited.includes(neighbor)) stack.push(neighbor);
                }
            }
        }
        return visited;
    }
    breathFirst(vertex){
        let queue = [vertex];
        let visited = {};
        let result = [];
        let current;
        while(queue.length > 0){
            current = queue.shift();
            visited[current] = true;
            result.push(current);
            for(let neighbor of this.adjacencyList[current]){
                if(!visited[neighbor] && !queue.includes(neighbor)){
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }
}

let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
// console.log(g.depthFirstRecursive("A"))
// console.log(g.depthFirstIterative("A"))
// console.log(g.breathFirst("A"))