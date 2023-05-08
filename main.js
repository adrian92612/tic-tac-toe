function CreatePlayer(name, mark) {
  return { name, mark };
}

function GameBoard() {}

function Game() {}

const startButton = document.getElementById("start-button");
startButton.addEventListener("submit", () => Game.start());
