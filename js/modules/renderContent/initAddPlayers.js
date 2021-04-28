import createElement from "../helpers/createElement.js";
import updatePlayersLocalStorage from "../utils/updatePlayersLocalStorage.js";

const main = document.querySelector("main");

export default function initAddPlayers() {
	const playersContainer = createElement({type: "section", classes: "playersContainer"});
	
	// insert title
	const playersTitle = createElement({type: "h2", textContent: "Spelers"});
	playersContainer.append(playersTitle);

	// insert player inputs
	if (!localStorage.getItem("players")) {
		const amountInputs = 4;
			for (var i = 0; i < amountInputs; i++) {
			const playerInput = createElement({type: "input", classes: "playerInput", attrs: [{attr: "type", value: "text"}, {attr: "name", value: "player"}], eventListeners: {event: "change", callback: updatePlayersLocalStorage}});
			playersContainer.append(playerInput);
		}
	} else {
		const players = JSON.parse(localStorage.getItem("players"));
		players.forEach(player => {
			const playerInput = createElement({type: "input", classes: "playerInput", attrs: [{attr: "name", value: "player"}, {attr: "value", value: player.name}], eventListeners: {event: "change", callback: updatePlayersLocalStorage}});
			playersContainer.append(playerInput);
		})
	}

	// add "add player button"
	const addPlayerBtn = createElement({type: "a", textContent: "Voeg speler toe", classes: "addPlayer", attrs: [{attr: "href", value: "javascript:void(0)"}]});
	addPlayerBtn.addEventListener("click", () => {
		const input = createElement({type: "input", classes: "playerInput", attrs: [{attr: "type", value: "text"}, {attr: "name", value: "player"}], eventListeners: {event: "change", callback: updatePlayersLocalStorage}});
		playersContainer.insertBefore(input, addPlayerBtn);
	})
	playersContainer.append(addPlayerBtn);

	// insert start game button
	const startButton = createElement({type: "a", textContent: "Begin spel", classes: "startGame", attrs: [{attr: "href", value: "#startGame"}]})
	
	// append elements
	main.append(playersContainer);
	main.append(startButton);
}