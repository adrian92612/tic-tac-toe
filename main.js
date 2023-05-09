function CreatePlayer(name, mark) {
  return { name, mark };
}

const GameBoard = (() => {
  let boxes = Array.from(document.getElementsByClassName("box"));
  boxes.forEach((box) =>
    box.addEventListener("click", (box) => Game.handleClick(box), {
      once: true,
    })
  );
  const resetBoard = () => window.location.reload();
  const getBoxes = () => boxes;
  return {
    getBoxes,
    resetBoard,
  };
})();

const Game = (() => {
  //initialize player data
  let playerX;
  let playerO;

  const start = (e) => {
    e.preventDefault();
    playerX = CreatePlayer(document.getElementById("player-x").value, "X");
    playerO = CreatePlayer(document.getElementById("player-o").value, "O");
    e.target.classList.add("hide");
  };

  const handleClick = (box) => {
    console.log(box.target);
    box.target.textContent = "X";
  };

  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => start(e));

  const getPlayerX = () => playerX;
  const getPlayerO = () => playerO;

  return {
    getPlayerX,
    getPlayerO,
    handleClick,
  };
})();
