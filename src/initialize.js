import { createGameBoard, createShips } from "./gameboard";
import { hover} from "./gameSquares";

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

const shipNames = ["Carrier", "Battleship", "Cruiser", "Submarine", "Destroyer"];
const shipLength = [5, 4, 3, 3, 2];
let start = 0;

function initializeGame() {
    startBtn.addEventListener("click", () => {
        let direction = "vertical";
        initialize.style.display = "none";
        title.setAttribute("style", "display: flex; justify-content: center; align-items: center;");
        playerTitle.style.display = "block";
        computerTitle.style.display = "block";
        modal.setAttribute("style", "display: flex; justify-content: center; align-items: center;");
        modal.showModal();
        createGameBoard(modalGameboard);
        createGameBoard(playerGameboard);
        createGameBoard(computerGameboard);
        const square = document.querySelectorAll("[class*=sq]");
        square.forEach(sq => {
            sq.addEventListener("mouseenter", (e) => {
                hover(e.target, shipLength[start], direction, "in");
            });
            sq.addEventListener("click", (e) => {
                hover(e.target, shipLength[start], direction, "selected");
            })
            sq.addEventListener("mouseout", (e) => {
                hover(e.target, shipLength[start], direction, "out");
            });
        });
        questionnaire.textContent = `Place ${shipNames[start]}`;
        shipContainer.appendChild(createShips(shipLength[start]));
    });

    const nextBtn = document.querySelector(".next");
    nextBtn.addEventListener("click", () => {
        shipContainer.removeChild(shipContainer.firstChild);
        start++;
        questionnaire.textContent = `Place ${shipNames[start]}`;
        shipContainer.appendChild(createShips(shipLength[start]));
    });
}

export { initializeGame };