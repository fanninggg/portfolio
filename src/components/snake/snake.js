import { getInputDirection } from './input.js';

let snakeBody = [
  {x: 11, y: 15},
  {x: 11, y: 14},
  {x: 11, y: 13},
  {x: 11, y: 12},
  {x: 11, y: 11}
]

let newSegments = 0;

const drawSnake = (gameBoard) => {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.x;
    snakeElement.style.gridColumnStart = segment.y;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement)
  })
}

const updateSnake = () => {
  if (hasHitEdge() || hasHitSelf()) return "reset";
  addSegments();
  const inputDirection = getInputDirection()
  for(let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = {...snakeBody[i]}
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

const isOnTopOfSnake = (position) => {
  return snakeBody.some((segment) => {
    return isEqualPosition(segment, position)
  })
}

const isEqualPosition = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

const growSnake = (growth) => {
  newSegments = growth;
}

const hasHitEdge = () => {
  return snakeBody.some((segment) => {
    return (segment.x >= 40 || segment.y >= 100 || segment.x <= 0 || segment.y <= 0)
  });
};

const hasHitSelf = () => {
  return snakeBody.slice(1).some((segment) => {
    return (segment.x == snakeBody[0].x && segment.y == snakeBody[0].y)
  })
}

const addSegments = () => {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }

  newSegments = 0
}

const resetGame = () => {
  console.log('end')
  document.querySelectorAll('.snake').forEach((segment) => {
    segment.remove()
  })
  // Doesn't work for some reason, come back to this.
  // Would a rerender in React work sort this?
}

export { drawSnake, updateSnake, isOnTopOfSnake, growSnake };