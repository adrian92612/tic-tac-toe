function CreatePlayer(name) {
  return name;
}

const GameBoard = (() => {
  let boxes = Array.from(document.querySelectorAll(".box"));

  boxes.forEach((box) =>
    box.addEventListener("click", (box) => Game.handleClick(box), {
      once: true,
    })
  );
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => Game.start(e));

  const displayWinner = (winner, draw) => {
    const resultBoard = document.querySelector("#result-board");
    const resetBtn = document.querySelector("#reset");
    let message = "";
    draw ? (message = "Draw!!!") : (message = `${winner} is the winner!`);
    resetBtn.addEventListener("click", () => window.location.reload());
    resultBoard.textContent = message;
    document.querySelector(".result").classList.add("show");
  };
  const getBoxes = () => boxes;
  return {
    getBoxes,
    displayWinner,
  };
})();

const Game = (() => {
  const WIN_COMBINATIOIN = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  //*****initialize player data
  let playerX;
  let playerO;
  let playerXturn = true;

  const start = (e) => {
    e.preventDefault();
    playerX = CreatePlayer(document.getElementById("player-x").value);
    playerO = CreatePlayer(document.getElementById("player-o").value);
    e.target.classList.add("hide");
  };

  const checkDraw = () => {
    return GameBoard.getBoxes().every((box) => {
      return box.classList.contains("x") || box.classList.contains("o");
    });
  };

  const checkWinner = (mark) => {
    return WIN_COMBINATIOIN.some((combination) => {
      return combination.every((index) => {
        return GameBoard.getBoxes()[index].classList.contains(mark);
      });
    });
  };

  const handleClick = (box) => {
    if (playerXturn) {
      box.target.classList.add("x"); //add marker
      box.target.parentElement.classList.add("o"); //  display placeholder marker for next player
      box.target.parentElement.classList.remove("x");
      if (checkWinner("x")) {
        GameBoard.displayWinner(playerX);
        return;
      }
    } else {
      box.target.classList.add("o");
      box.target.parentElement.classList.add("x");
      box.target.parentElement.classList.remove("o");
      if (checkWinner("o")) {
        GameBoard.displayWinner(playerO);
        return;
      }
    }
    if (checkDraw()) GameBoard.displayWinner(null, true);
    playerXturn = !playerXturn;
  };

  return {
    handleClick,
    start,
  };
})();
