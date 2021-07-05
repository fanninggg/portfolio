import React, { useEffect, useRef, useState } from 'react'
import { drawSnake, updateSnake } from './snake.js';
import { drawFood, updateFood } from './food.js';
// import { TeacherSVG, DeveloperSVG, ConsultantSVG } from './svgs'

export const GameBoard = () => {
  let lastRenderTime = 0;
  let snakeSpeed = 10;
  let gameBoard;
  let animationFrameId;

  const gameBoardRef = useRef();
  const [attemptNumber, setAttemptNumber] = useState(0);

  useEffect(() => {
    gameBoard = gameBoardRef.current;
  });

  const runGame = (currentTime) => {
    window.requestAnimationFrame(runGame)
    const timeSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(timeSinceLastRender < 1 / snakeSpeed ) return;

    lastRenderTime = currentTime
    update();
    draw();
  }

  const update = () => {
    if (updateSnake() == "reset") {
      window.cancelAnimationFrame(animationFrameId);
      setAttemptNumber(attemptNumber + 1)
    }
    updateFood()
  }

  const draw = () => {
    gameBoard.innerText = ''
    drawSnake(gameBoard);
    drawFood(gameBoard)
  }

  console.log('render')
  animationFrameId = window.requestAnimationFrame(runGame);

  return (
    <div id="game-board" ref={gameBoardRef}>
    </div>
  )
}