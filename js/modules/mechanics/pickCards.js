import topInfo from "../renderContent/topInfo.js";
import startGame from "./startGame.js";
import alertPopup from "../renderContent/alertPopup.js";

function startPicking() {
	const users = JSON.parse(localStorage.getItem("players"));
	let random = Math.floor(Math.random() * users.length);
	const userTurn = users[random];
	if (users.every(user => user.role != "")) {
		console.log("alle users zijn al gekozen");
		if (!document.querySelector(".alertModal")) {
			startGame();
		} else {
			setTimeout(() => {
				startPicking();
			}, 1000)
		}
	} else if (userTurn.role != "") {
		startPicking();
	} else {
		localStorage.setItem("userTurn", JSON.stringify(userTurn));
		topInfo(userTurn.name);
	}
}

const assignRole = async (event) => {
	document.querySelector(".topInfo").remove();
	const clickedEl = event.target;
	const role = event.target.dataset.role;
	const user = JSON.parse(localStorage.getItem("userTurn"));
	const players = JSON.parse(localStorage.getItem("players"));
	const currentPlayer = players.find(obj => obj.name === user.name);
	currentPlayer.role = role;
	localStorage.setItem("players", JSON.stringify(players));
	if (role === "mr-white") {
		alertPopup({title: currentPlayer.name, subtitle: "Je bent Mr White!", actionButtonText: "OK"});
	} else {
		const words = JSON.parse(localStorage.getItem("words"));
		if (role === "burger") {
			alertPopup({title: currentPlayer.name, subtitle: `Jouw geheime woord is ${words.word}`, actionButtonText: "OK"});
		}
		if (role === "undercover") {
			alertPopup({title: currentPlayer.name, subtitle: `Jouw geheime woord is ${words.synonym}`, actionButtonText: "OK"});
		}
	}
	console.log(`Assigned ${role} to ${user.name}`);
	clickedEl.remove();
	startPicking();
}

export { startPicking, assignRole };