import alertPopup from "../renderContent/alertPopup.js";

const players = JSON.parse(localStorage.getItem("players"));

export default function eliminatePlayer() {
	const player = this.dataset.name;
	const role = this.dataset.role;
	
	const eliminatedPlayer = players.find(obj => obj.name === player);
	eliminatedPlayer.eliminated = true;
	localStorage.setItem("players", JSON.stringify(players));

	alertPopup({title: `${player} dood!`, subtitle: `${player} was ${role} en is geëlimineerd.`, actionButtonText: "OK"});
	this.remove();
	countInfiltrators();
}

function countInfiltrators() {
	const amountMrWhite = (players.filter(obj => obj.role === "mr-white" && !obj.eliminated)).length;
	const amountUndercover = (players.filter(obj => obj.role === "undercover" && !obj.eliminated)).length;
	const amountBurger = (players.filter(obj => obj.role === "burger" && !obj.eliminated)).length;

	document.querySelector(".amountMrWhite span").textContent = amountMrWhite;
	document.querySelector(".amountUndercover span").textContent = amountUndercover;

	if (amountMrWhite == 0 && amountUndercover == 0) {
		alertPopup({title: "klaar!", subtitle: "Burgers hebben gewonnen", actionButtonText: "OK"})
	}
	if (amountBurger == 0) {
		alertPopup({title: "klaar!", subtitle: "Mr White & undercovers hebben gewonnen", actionButtonText: "OK"})	
	}
}