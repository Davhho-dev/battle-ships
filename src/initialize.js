import { createGameBoard, createShips } from "./gameboard";

const initialize = document.querySelector(".initialize");
const startBtn = document.querySelector(".start");
const title = document.querySelector(".title");
const playerTitle = document.querySelector(".player-title");
const computerTitle = document.querySelector(".computer-title");
const modal = document.querySelector("dialog");
const modalGameboard = document.querySelector(".modal-gameboard");
const playerGameboard = document.getElementById("player-gameboard");
const computerGameboard = document.getElementById("computer-gameboard");
const questionnaire = document.querySelector(".ship-questionnaire");
const shipContainer = document.querySelector(".ship-con");

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
        questionnaire.textContent = "Place Cruiser";
        shipContainer.appendChild(createShips(5));
    })
}

export { initializeGame };