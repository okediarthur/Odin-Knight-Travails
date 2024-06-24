function bfs(start, goal, getNeighbors){
    const queue = [[start]];
    const visited = new Set();
    visited.add(start.toString());

    while(queue.length > 0){
        const path = queue.shift();
        const node = path[path.length -1];

        if(node[0] === goal[0] && node[1] === goal[1]){
            return path;
        }

        const neighbors = getNeighbors(node);
        for(const neighbor of neighbors){
            if(!visited.has(neighbor.toString())){
                visited.add(neighbor.toString());
                const newPath = path.concat([neighbor]);
                queue.push(newPath);
            }
        }
    }
    return null;
}

module.exports = { bfs }