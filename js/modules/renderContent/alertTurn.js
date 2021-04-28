import createElement from "../helpers/createElement.js";

const main = document.querySelector("main");

export default function alertTurn(user) {
	const elOptions = {
		type: "div",
		textContent: user.name,
		classes: "alertTurn"
	};
	const alertEl = createElement(elOptions);
	main.append(alertEl);
}