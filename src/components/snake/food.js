import { isOnTopOfSnake, growSnake } from './snake.js';

let growthRate = 2;

const randomGridPosition = () => {
  return {
    x: Math.floor(Math.random() * 40) + 1,
    y: Math.floor(Math.random() * 100) + 1
  }
}

const getRandomFoodPosition = () => {
  let newFoodPosition;
  while (newFoodPosition == null || isOnTopOfSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}

let foodPosition = getRandomFoodPosition();

const drawFood = (gameBoard) => {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = foodPosition.x;
  foodElement.style.gridColumnStart = foodPosition.y;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement)
}

const updateFood = () => {
  if(isOnTopOfSnake(foodPosition)) {
    growSnake(growthRate)
    foodPosition = getRandomFoodPosition()
  }
}

export { drawFood, updateFood }