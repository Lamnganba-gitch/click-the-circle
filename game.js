const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

let score = 0;
let timeLeft = 30;
let gameInterval;

function getRandomPosition() {
  const x = Math.random() * (gameArea.clientWidth - 50);
  const y = Math.random() * (gameArea.clientHeight - 50);
  return { x, y };
}

function createCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  const { x, y } = getRandomPosition();
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  circle.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    circle.remove();
    createCircle();
  });

  gameArea.innerHTML = ""; // clear old circle
  gameArea.appendChild(circle);
}

function startGame() {
  createCircle();

  gameInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      gameArea.innerHTML = "";
      alert(`⏱️ Time's up! Final Score: ${score}`);
    }
  }, 1000);
}

startGame();
