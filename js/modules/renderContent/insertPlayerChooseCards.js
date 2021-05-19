import topInfo from "./topInfo.js";
import createElement from "../helpers/createElement.js";
import { mrwhiteSvg, undercoverSvg } from "../utils/amountInfiltratorsUtils.js";
import eliminatePlayer from "../mechanics/eliminatePlayer.js";

const main = document.querySelector("main");

export default function insertPlayerChooseCards(firstPlayer) {
	topInfo(`We starten met ${firstPlayer}. Iedereen beschrijft zijn woord. Daarna overleg, stem en kies je de geëlimineerd speler.`);
	insertAmountInfiltrators();

	const players = JSON.parse(localStorage.getItem("players"));
	
	const playersContainer = createElement({type: "div", classes: "startedPlayersContainer"});

	players.forEach(player => {
		const playerCardContainer = createElement({type: "div", classes: "playerCardContainer", attrs: [{attr: "data-name", value: player.name}, {attr: "data-role", value: player.role}], eventListeners: {event: "click", callback: eliminatePlayer}});
		const playerAvatar = createElement({type: "div", classes: "playerAvatar", textContent: player.name.charAt(0)});
		const playerNameBar = createElement({type: "p", classes: "playerNameBar", textContent: player.name});
		playerCardContainer.append(playerAvatar);
		playerCardContainer.append(playerNameBar);
		playersContainer.append(playerCardContainer);
	});

	main.append(playersContainer);
}

function insertAmountInfiltrators() {
	const players = JSON.parse(localStorage.getItem("players"));
	const amountMrWhite = (players.filter(obj => obj.role === "mr-white")).length;
	const amountUnderCover = (players.filter(obj => obj.role === "undercover")).length;

	const amountInfiltratorsContainer = createElement({type: "div", classes: "amountInfiltratorsContainer", textContent: "Aantal infiltranten"});
	const amountInfiltratorsViz = createElement({type: "div", classes: "amountInfiltratorsViz"});
	
	const amountMrWhiteHtml = `
	${mrwhiteSvg}
	<span>${amountMrWhite}</span>
	`;
	const amountMrWhiteEl = createElement({type: "div", classes: ["amountInfiltratorSub", "amountMrWhite"], innerHTML: amountMrWhiteHtml});

	const amountUnderCoverHtml = `
	${undercoverSvg}
	<span>${amountUnderCover}</span>
	`;
	const amountUnderCoverEl = createElement({type: "div", classes: ["amountInfiltratorSub", "amountUndercover"], innerHTML: amountUnderCoverHtml});

	amountInfiltratorsViz.append(amountMrWhiteEl);
	amountInfiltratorsViz.append(amountUnderCoverEl);

	amountInfiltratorsContainer.append(amountInfiltratorsViz);

	main.append(amountInfiltratorsContainer);
}