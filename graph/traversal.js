const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};
// ----------------------------------------------------------------
// Iterative depthFirst

// const depthFirstPrint = (graph, source) => {
//     let stack = [source];
//     while(stack.length > 0){
//         let current = stack.pop();
//         console.log(current)
//         for(let neighbor of graph[current]){
//             stack.push(neighbor);
//         }
//     }
// }

// Recursive depthFirst

// const depthFirstPrint = (graph, source) => {
//     console.log(source);
//     for(let neighbor of graph[source]){
//         depthFirstPrint(graph, neighbor);
//     }
// }

// console.log(depthFirstPrint(graph, "a"));

// ------------------------------------------------------------
// BreathFirst

const breathFirstPrint = (graph, source) => {
    let queue = [source];
    while(queue.length > 0){
        let current = queue.shift();
        console.log(current);
        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
}

console.log(breathFirstPrint(graph, "a"));