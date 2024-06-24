const { isValidPosition } = require("./board");
const { bfs } = require("./bfs");

const knight_Moves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
]; 

function getKnightMoves([x, y]) {
    return knight_Moves.map(([dx, dy]) => [x + dx, y + dy]).filter(
        isValidPosition
    );
}

function knightMoves(start, end){
    return bfs(start, end, getKnightMoves);
}

module.exports = { knightMoves };