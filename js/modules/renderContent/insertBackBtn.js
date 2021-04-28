import createElement from "../helpers/createElement.js";

const main = document.querySelector("main");

export default function insertBackBtn() {
	const page = location.hash;
	const backBtnOptions = {
		type: "a",
		textContent: "Terug"
	}
	if (page === "#startGame") {
		backBtnOptions.attrs = {
			attr: "href",
			value: ""
		}
	}
	const backBtn = createElement(backBtnOptions);
	main.append(backBtn);
}