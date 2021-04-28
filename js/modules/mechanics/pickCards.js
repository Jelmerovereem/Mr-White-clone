import alertTurn from "../renderContent/alertTurn.js";

function startPicking() {
	const users = JSON.parse(localStorage.getItem("players"));
	let random = Math.floor(Math.random() * users.length);
	const userTurn = users[random];
	if (users.every(user => user.role != "")) {
		console.log("alle users zijn al gekozen")
	} else if (userTurn.role != "") {
		startPicking();
	} else {
		localStorage.setItem("userTurn", JSON.stringify(userTurn));
		alertTurn(userTurn);
	}
}

const assignRole = async (event) => {
	document.querySelector(".alertTurn").remove();
	const clickedEl = event.target;
	const role = event.target.dataset.role;
	const user = JSON.parse(localStorage.getItem("userTurn"));
	const players = JSON.parse(localStorage.getItem("players"));
	const currentPlayer = players.find(obj => obj.name === user.name);
	currentPlayer.role = role;
	localStorage.setItem("players", JSON.stringify(players));
	if (role === "mr-white") {
		alert("Jij bent mr white!");
	} else {
		const words = JSON.parse(localStorage.getItem("words"));
		if (role === "burger") {
			alert(`Jouw woord is ${words.word}`)
		}
		if (role === "undercover") {
			alert(`Jouw woord is ${words.synonym}`)
		}
	}
	console.log(`Assigned ${role} to ${user.name}`);
	clickedEl.remove();
	startPicking();
}

export { startPicking, assignRole };