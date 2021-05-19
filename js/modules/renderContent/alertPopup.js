import createElement from "../helpers/createElement.js";
import removeElements from "../helpers/removeElements.js";

const main = document.querySelector("main");

export default function alertPopup({title, subtitle, innerHTML, actionButtonText, actionButtonCallback}) {
	const outerModal = createElement({type: "div", classes: "alertModal"});

	const innerModal = createElement({type: "div", classes: "innerModal"});
	
	if (title) {
		const titleModal = createElement({type: "h2", classes: "modalTitle", textContent: title});
		innerModal.append(titleModal);
	}

	if (subtitle) {
		const subtitleModal = createElement({type: "p", classes: "modalSubtitle", textContent: subtitle});
		innerModal.append(subtitleModal);
	}

	if (actionButtonText) {
		let buttonModal;
		if (actionButtonCallback && typeof actionButtonCallback === "function") {
			buttonModal = createElement({type: "a", classes: "modalButton", textContent: actionButtonText, eventListeners: [{event: "click", callback: closeAlertPopup}, {event: "click", callback: actionButtonCallback}]});
		} else {
			buttonModal = createElement({type: "a", classes: "modalButton", textContent: actionButtonText, eventListeners: {event: "click", callback: closeAlertPopup}});
		}
		innerModal.append(buttonModal);
	}

	outerModal.append(innerModal);

	main.append(outerModal);
}

function closeAlertPopup() {
	const popup = document.querySelector(".alertModal");
	if (popup) {
		removeElements([popup])
	}
}