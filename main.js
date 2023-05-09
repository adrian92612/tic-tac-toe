let playerX;
let playerO;

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
  const start = (e) => {
    e.preventDefault();
    playerX = CreatePlayer(document.getElementById("player-x").value, "X");
    playerO = CreatePlayer(document.getElementById("player-o").value, "O");
    e.target.classList.add("hide");
  };
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => start(e));
})();
