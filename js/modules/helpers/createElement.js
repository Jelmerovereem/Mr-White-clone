/*

type = string
textContent = string
classes = string || [string, string]
innerHTML = string
attrs = {attr: string, value: string} || [{attr: string, value: string}, {attr: string, value: string}]
eventListeners: {event: string, callback: function} || [{event: string, callback: function}, {event: string, callback: function}]

*/

export default function createElement({type, textContent, classes, innerHTML, attrs, eventListeners}) {
	if (!type) {
		throw "You did not define a element type";
	}
	const el = document.createElement(type);
	
	if (textContent) {
		el.textContent = textContent;
	}

	if (innerHTML) {
		el.innerHTML = innerHTML;
	}

	if (classes) {
		if (Array.isArray(classes)) {
			classes.forEach(className => el.classList.add(className))
		} else {
			el.classList.add(classes);
		}
	}

	if (attrs) {
		if (Array.isArray(attrs)) {
			attrs.forEach(attrObj => el.setAttribute(attrObj.attr, attrObj.value))
		} else {
			el.setAttribute(attrs.attr, attrs.value)
		}
	}

	if (eventListeners) {
		if (Array.isArray(eventListeners)) {
			eventListeners.forEach(eventListener => el.addEventListener(eventListener.event, eventListener.callback));
		} else {
			el.addEventListener(eventListeners.event, eventListeners.callback)
		}
	}

	return el;
}