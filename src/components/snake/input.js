let inputDirection = { x: 0, y: 1 }
let lastInputDirection = { x: 0, y: 0 }

document.addEventListener('keydown', e => {
  if (e.key === "ArrowLeft") {
    if (lastInputDirection.y !== 0) return
    inputDirection = {x: 0, y: -1}
  } else if(e.key === "ArrowRight") {
    if (lastInputDirection.y !== 0) return
    inputDirection = {x: 0, y: 1}
  } else if(e.key === "ArrowUp") {
    e.preventDefault();
    if (lastInputDirection.x !== 0) return
    inputDirection = {x: -1, y: 0}
  } else if(e.key === "ArrowDown") {
    e.preventDefault();
    if (lastInputDirection.x !== 0) return
    inputDirection = {x: 1, y: 0}
  }
})

const getInputDirection = () => {
  lastInputDirection = inputDirection
  return inputDirection
}

export { getInputDirection }