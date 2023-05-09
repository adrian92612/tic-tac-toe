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
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => Game.start(e));
  const resetBoard = () => window.location.reload();
  const getBoxes = () => boxes;
  return {
    resetBoard,
    getBoxes,
  };
})();

const Game = (() => {
  //initialize player data
  let playerX;
  let playerO;
  let playerXturn = true;

  const start = (e) => {
    e.preventDefault();
    playerX = CreatePlayer(document.getElementById("player-x").value, "X");
    playerO = CreatePlayer(document.getElementById("player-o").value, "O");
    e.target.classList.add("hide");
  };

  const checkWinner = () => {
    console.log(GameBoard.getBoxes());
  };

  const handleClick = (box) => {
    console.log(box.target);
    playerXturn ? box.target.classList.add("x") : box.target.classList.add("o");
    //check win/lose/draw
    playerXturn = !playerXturn;
  };

  return {
    handleClick,
    start,
    checkWinner,
  };
})();
