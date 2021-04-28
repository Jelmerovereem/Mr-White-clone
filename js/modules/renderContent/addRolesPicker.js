import createElement from "../helpers/createElement.js";

const main = document.querySelector("main");

export default function addRolesPicker() {
	const rolesContainer = createElement({type: "section", classes: "rolesContainer"});

	const roles = ["Burger", "Undercover", "Mr. White"];

	roles.forEach(role => {
		const roleContainer = createElement({type: "div", classes: "roleContainer"});
		const roleText = createElement({type: "p", textContent: role, classes: "roleText"});
		const roleAmount = createElement({type: "input", classes: "roleAmount", attrs: [{attr: "type", value: "number"}, {attr: "min", value: "0"}, {attr: "value", value: "0"}]});
		roleContainer.append(roleText);
		roleContainer.append(roleAmount);

		rolesContainer.append(roleContainer);
	})

	main.append(rolesContainer);
}