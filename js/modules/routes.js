import removeElements from "./helpers/removeElements.js";
import createCards from "./renderContent/createCards.js";
import insertStartButton from "./renderContent/insertStartButton.js";
import cleanMain from "./helpers/cleanMain.js";
import initAddPlayers from "./renderContent/initAddPlayers.js";
import insertBackBtn from "./renderContent/insertBackBtn.js";
import addRolesPicker from "./renderContent/addRolesPicker.js";
import { startPicking } from "./mechanics/pickCards.js";
import pickWords from "./mechanics/pickWords.js";

export default function routes() {
	routie("", (e) => {
		cleanMain();
		initAddPlayers();
		//addRolesPicker();
	})

	routie("startGame", () => {
		// init the game
		cleanMain();
		insertBackBtn();
		createCards();
		pickWords();
		startPicking();
	})
}