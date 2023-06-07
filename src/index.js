import "./style.css";
import { createGameBoard } from "./gameboard";

const playerGameboard = document.getElementById("player-gameboard");
createGameBoard(playerGameboard);