import createRoles from "../mechanics/createRoles.js";
import { assignRole } from "../mechanics/pickCards.js";

const main = document.querySelector("main");

export default function createCards() {
	const users = JSON.parse(localStorage.getItem("players"));
	users.forEach(user => user.role = "");
	localStorage.setItem("players", JSON.stringify(users));
	const allRoles = createRoles(users);

	const cardsContainer = document.createElement("div");
	
	cardsContainer.classList.add("playerCardsContainer");
	
	users.forEach(user => {
		let random = Math.floor(Math.random() * allRoles.length);
		const cardContainer = document.createElement("div");
		cardContainer.classList.add("playerCard");
		cardContainer.dataset.role = allRoles[random];
		cardContainer.classList.add(allRoles[random]);
		//cardContainer.textContent = allRoles[random];
		cardContainer.textContent = "?";
		allRoles.splice(random, 1);
		cardContainer.addEventListener("click", assignRole);
		cardsContainer.append(cardContainer);
	})
	
	main.append(cardsContainer);
}