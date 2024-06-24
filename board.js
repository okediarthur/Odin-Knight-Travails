const BOARD_SIZE = 8;

function isValidPosition([x, y]) {
    return x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE;
}

module.exports = { isValidPosition, BOARD_SIZE };