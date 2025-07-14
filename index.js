class MoveNode {
    constructor(coordinates, path) {
        this.coords = coordinates; // [x, y]
        this.path = path;         // Array of previous [x, y] coordinates
    }
}


function getValidMoves([x, y]) {
    const moveOffsets = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    const validMoves = [];
    for (const [dx, dy] of moveOffsets) {
        const newX = x + dx;
        const newY = y + dy;

        // Check if the new coordinates are within the 8x8 board
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            validMoves.push([newX, newY]);
        }
    }
    return validMoves;
}

function knightMoves(startPos, endPos) {
    // Helper to convert algebraic notation like 'a1' to [0, 0] coordinates
    const toCoords = (pos) => {
        const x = pos.charCodeAt(0) - 'a'.charCodeAt(0);
        const y = parseInt(pos.substring(1)) - 1;
        if (isNaN(x) || isNaN(y) || x < 0 || x >= 8 || y < 0 || y >= 8) {
            return null;
        }
        return [x, y];
    };

    // Helper to convert coordinates like [0, 0] back to 'a1'
    const toNotation = (coords) => {
        const xChar = String.fromCharCode('a'.charCodeAt(0) + coords[0]);
        const yChar = coords[1] + 1;
        return `${xChar}${yChar}`;
    };

    const startCoords = toCoords(startPos);
    const endCoords = toCoords(endPos);

    if (!startCoords || !endCoords) {
        console.log("Invalid start or end position. Please use algebraic notation (e.g., 'a1', 'h8').");
        return;
    }

    // A queue for the Breadth-First Search 
    const queue = [new MoveNode(startCoords, [startCoords])];

    // A set to keep track of visited squares to avoid cycles.
    const visited = new Set([startCoords.join(',')]);

    // Perform the search
    while (queue.length > 0) {
        // Get the current position from the front of the queue
        console.log(queue)
        const currentNode = queue.shift();
        const [currentX, currentY] = currentNode.coords;

        if (currentX === endCoords[0] && currentY === endCoords[1]) {
            const pathNotation = currentNode.path.map(toNotation);
            console.log(`=> You made it in ${pathNotation.length - 1} moves! Here's your path:`);
            console.log(pathNotation.join(' -> '));
            return;
        }

        const moves = getValidMoves(currentNode.coords);
        for (const move of moves) {
            const moveKey = move.join(',');
            if (!visited.has(moveKey)) {
                visited.add(moveKey); // Mark this square as visited

                // Create a new path by appending the new move
                const newPath = [...currentNode.path, move];
                
                // Add the new position and its path to the back of the queue
                queue.push(new MoveNode(move, newPath));
            }
        }
    }
}

