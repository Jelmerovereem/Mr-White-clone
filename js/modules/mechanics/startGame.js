import cleanMain from "../helpers/cleanMain.js";
import pickFirstPlayer from "./pickFirstPlayer.js";
import insertPlayerChooseCards from "../renderContent/insertPlayerChooseCards.js";

export default function startGame() {
	cleanMain();
	const players = JSON.parse(localStorage.getItem("players"));
	players.forEach(player => player.eliminated = false);
	localStorage.setItem("players", JSON.stringify(players));
	const firstPlayer = pickFirstPlayer();
	insertPlayerChooseCards(firstPlayer);
}