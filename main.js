function CreatePlayer(name, mark) {
  return { name, mark };
}

const GameBoard = (() => {
  let boxes = Array.from(document.getElementsByClassName("box"));

  const getBoxes = () => boxes;
  return {
    getBoxes,
  };
})();

const Game = (() => {
  //initialize player data
  const start = () => {};
  return {
    start,
  };
})();

const startButton = document.getElementById("start-button");
startButton.addEventListener("submit", () => Game.start());
