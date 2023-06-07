import "./style.css";
import { createGameBoard, createShips } from "./gameboard";
import { initializeGame } from "./initialize";

const shipNames = ["Carrier", "Battleship", "Cruiser", "Submarine", "Destroyer"];
const shipLength = [5, 4, 3, 3, 2];
let start = 0;

initializeGame();

const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", () => {
    const shipContainer = document.querySelector(".ship-con");
    shipContainer.removeChild(shipContainer.firstChild);
    start++;
    const questionnaire = document.querySelector(".ship-questionnaire");
    questionnaire.textContent = `Place ${shipNames[start]}`;
    shipContainer.appendChild(createShips(shipLength[start]));
})

