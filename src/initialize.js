import { createGameBoard } from "./gameboard";

const initialize = document.querySelector(".initialize");
const startBtn = document.querySelector(".start");
const title = document.querySelector(".title");
const playerTitle = document.querySelector(".player-title");
const computerTitle = document.querySelector(".computer-title");
const modal = document.querySelector("dialog");
const modalGameboard = document.querySelector(".modal-gameboard");
const playerGameboard = document.querySelector(".player-gameboard");
const computerGameboard = document.querySelector(".gameboard-gameboard");

function initializeGame() {
    startBtn.addEventListener("click", () => {
        initialize.style.display = "none";
        title.setAttribute("style", "display: flex; justify-content: center; align-items: center;");
        playerTitle.style.display = "block";
        computerTitle.style.display = "block";
        modal.setAttribute("style", "display: flex; justify-content: center; align-items: center;");
        modal.showModal();
        createGameBoard(modalGameboard);
        createGameBoard(playerGameboard);
        createGameBoard(computerGameboard);
    })
}

export { initializeGame };