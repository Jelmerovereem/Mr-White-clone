export default function updatePlayersLocalStorage() {
		const allPlayerInputs = document.querySelectorAll(".playerInput");
		let players = [];
		allPlayerInputs.forEach(el => {
			if (el.value != "") {
				players.push({
					name: el.value,
					role: ""
				});
			}
		})
		localStorage.setItem("players", JSON.stringify(players));
}