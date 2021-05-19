export default function updatePlayersLocalStorage() {
	const allPlayerInputs = document.querySelectorAll(".playerInput");
	let players = [];
	allPlayerInputs.forEach(el => {
		if (el.value != "") {
			players.push({
				name: el.value,
				role: "",
				eliminated: false
			});
		}
	})
	localStorage.setItem("players", JSON.stringify(players));
}