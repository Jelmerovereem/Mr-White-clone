import createElement from "../helpers/createElement.js";

const main = document.querySelector("main");

export default function topInfo(textContent) {
	const elOptions = {
		type: "div",
		textContent,
		classes: "topInfo"
	};
	const alertEl = createElement(elOptions);
	main.append(alertEl);
}