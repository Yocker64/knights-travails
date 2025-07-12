function knightMoves(initialCoordinate, goal){
  let movesInitial = getMoves(initialCoordinate);// Gets moves for the knight
  let oneMoveFromGoal = getMoves(goal); // Moves a knight could do to get to the goaal in one step
  let twoMovesFromGoal = oneMoveFromGoal.map(move=>getMoves(move)) // moves to get to a place where the knight would just be from one move to the goal
  let [begX, betY] = initialCoordinate.split('')
  let [goalX,goalY] = goal.split('')
  let reachGoal = false;
  do {
    if (initialCoordinate == goal) {
     console.log(initialCoordinate);
     reachGoal = true;
    }else if (oneMoveFromGoal.includes(initialCoordinate)) {
      console.log(initialCoordinate);
      initialCoordinate = goal;
    }else if (twoMovesFromGoal.map(moves=> moves.includes(initialCoordinate) )) {
      
    }
  } while (!reachGoal);
  
}

class Knight {
  constructor(xcoordinate, ycoordinate,goalx, goaly) {
    this.x = xcoordinate;
    this.y = ycoordinate;
    this.goal = [goalx, goaly];
    this.moves = getMoves(this.x, this.y);
    this.move = move;
  }
   move(goal) {
    
  }

}

// Get array of possible eight moves a horse can do, if there is no such move in the  board, then the number of elements < 8
function getMoves(coordinate) {
let [xpos,ypos] = coordinate.split("")
xpos = parseInt(xpos)
ypos = parseInt(ypos)

  let moves =[];
  if (xpos - 2 >= 0 && ypos - 1 >= 0) {
    moves.push(`${xpos-2}${ypos-1}`)
  }
  if (xpos - 1 >= 0 && ypos - 2 >= 0) {
    moves.push(`${xpos-1}${ypos-2}`)
  }
    if (xpos + 2 >= 0 && ypos - 1 >= 0) {
    moves.push(`${xpos+2}${ypos-1}`)
  }
  if (xpos + 1 >= 0 && ypos - 2 >= 0) {
    moves.push(`${xpos+1}${ypos-2}`)
  }

    if (xpos + 2 >= 0 && ypos + 1 >= 0) {
    moves.push(`${xpos+2}${ypos+1}`)
  }
  if (xpos + 1 >= 0 && ypos + 2 >= 0) {
    moves.push(`${xpos+1}${ypos+2}`)
  }
    if (xpos - 2 >= 0 && ypos + 1 >= 0) {
    moves.push(`${xpos-2}${ypos+1}`)
  }
  if (xpos - 1 >= 0 && ypos + 2 >= 0) {
    moves.push(`${xpos-1}${ypos+2}`)
  }
  return moves;
}
knightMoves('12','24')