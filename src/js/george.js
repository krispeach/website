let grid = document.querySelector(".grid");
let popup = document.querySelector(".popup");
let play = document.querySelector(".play");
let scoreDisplay = document.querySelector(".scoreDisplay");
let left = document.querySelector(".left");
let bottom = document.querySelector(".bottom");
let right = document.querySelector("button.right");
let up = document.querySelector(".top");
let width = 30;
let currentIndex = 0;
let appleIndex = 0;
let currentSnake = [2, 1, 0];
let direction = 1;
let score = 0;
let speed = 0.8;
let intervalTime = 0;
let interval = 0;

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keyup", control);
  createBoard();
  play.addEventListener("click", replay);
});

function createBoard() {
  // popup.style.display = "none";

  for (let i = 0; i < 900; i++) {
    let div = document.createElement("div");
    div.classList.add(i);
    grid.appendChild(div);
  }
}

function startGame() {
  let squares = document.querySelectorAll(".grid div");
  randomApple(squares);
  //random apple
  direction = 1;
  scoreDisplay.innerHTML = score;
  intervalTime = 1000;
  currentSnake = [2, 1, 0];
  currentIndex = 0;
  currentSnake.forEach((index) => squares[index].classList.add("snake"));
  squares[2].classList.add("head");
  squares[0].classList.add("tail");
  interval = setInterval(moveOutcome, intervalTime);
}

function moveOutcome() {
  let squares = document.querySelectorAll(".grid div");

  if (checkForHits(squares)) {
    document.getElementById("message").innerHTML = "You hit something!";
    popup.style.display = "flex";
    return clearInterval(interval);
  } else {
    moveSnake(squares);
  }
}

function moveSnake(squares) {
  let tail = currentSnake.pop();
  squares[tail].classList.remove("snake");
  squares[tail].classList.remove("tail");
  currentSnake.unshift(currentSnake[0] + direction);
  // movement ends here
  eatApple(squares, tail);
  squares[currentSnake[0]].classList.add("snake");
  squares[currentSnake[0]].classList.add("head");
  squares[currentSnake[1]].classList.remove("head");
  let snakeLength = currentSnake.length;
  squares[currentSnake[snakeLength - 1]].classList.add("tail");
  squares[currentSnake[snakeLength - 2]].classList.remove("tail");
}

function checkForHits(squares) {
  if (
    (currentSnake[0] + width >= width * width && direction === width) ||
    (currentSnake[0] % width === width - 1 && direction === 1) ||
    (currentSnake[0] % width === 0 && direction === -1) ||
    (currentSnake[0] - width <= 0 && direction === -width) ||
    squares[currentSnake[0] + direction].classList.contains("snake")
  ) {
    return true;
  } else {
    return false;
  }
}

function eatApple(squares, tail) {
  if (squares[currentSnake[0]].classList.contains("apple")) {
    squares[currentSnake[0]].classList.remove("apple");
    squares[tail].classList.add("snake");
    currentSnake.push(tail);
    randomApple(squares);
    score++;
    scoreDisplay.textContent = score;
    clearInterval(interval);
    intervalTime = intervalTime * speed;
    interval = setInterval(moveOutcome, intervalTime);
  }
}

function randomApple(squares) {
  do {
    appleIndex = Math.floor(Math.random() * squares.length);
  } while (squares[appleIndex].classList.contains("snake"));
  {
    squares[appleIndex].classList.add("apple");
  }
}

function control(e) {
  if (e.keyCode === 68) {
    direction = 1; // right
  } else if (e.keyCode === 87) {
    direction = -width;
  } else if (e.keyCode === 65) {
    direction = -1; // left, the snake will go left one div
  } else if (e.keyCode === 83) {
    direction = +width; // down the snake head will instantly appear 10 divs below from the current div
  }
}

up.addEventListener("click", () => (direction = -width));
bottom.addEventListener("click", () => (direction = +width));
left.addEventListener("click", () => (direction = -1));
right.addEventListener("click", () => (direction = 1));

function replay() {
  grid.innerHTML = "";
  createBoard();
  startGame();
  popup.style.display = "none";
  play.innerHTML = "Play Again";
}
