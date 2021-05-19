import alertPopup from "../renderContent/alertPopup.js";

export default function pickFirstPlayer() {
	const players = JSON.parse(localStorage.getItem("players"));
	const withoutMrWhite = players.filter(obj => obj.role != "mr-white");
	const randomPlayer = Math.floor(Math.random() * withoutMrWhite.length);
	alertPopup({title: "Omschrijf je woord", subtitle: `${withoutMrWhite[randomPlayer].name} mag beginnen!`, actionButtonText: "OK"});
	return withoutMrWhite[randomPlayer].name;
}