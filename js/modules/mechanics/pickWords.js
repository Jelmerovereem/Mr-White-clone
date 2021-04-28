import createElement from "../helpers/createElement.js";

const main = document.querySelector("main");
let foundSynonym = false;

export default async function pickWords() {
	if (!foundSynonym) {
		if (!document.querySelector(".lds-roller")) {
			const spinner = createElement({type: "div", classes: "lds-roller", innerHTML: "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>"});
			main.append(spinner);
		}
	} else if (foundSynonym) {
		if (document.querySelector(".lds-roller")) {
			document.querySelector(".lds-roller").remove();
		}
	}
	let words = await fetch("../../../../assets/wordlist.txt").then(res => {
		//console.log(res)
		return res.ok ? res.text() : res;
	})
	words = words.split(/\n+/)
	let random = Math.floor(Math.random() * words.length);
	const word = words[random];
	console.log(word);
	console.log(`https://synoniemen.net/alex/alexandria-popinto-2011/v2/alexandria-v2-display.php?w=${word}&sl=nl&tl1=nl&tl2=nl&dl=en&sww=708&sdh=100000&sbh=0`)
	let synonymHtml = await fetch(`https://thingproxy.freeboard.io/fetch/https://synoniemen.net/alex/alexandria-popinto-2011/v2/alexandria-v2-display.php?w=${word}&sl=nl&tl1=nl&tl2=nl&dl=en&sww=708&sdh=100000&sbh=0`).then(res => {
		//console.log(res);
		return res.ok ? res.text() : console.log(res);
	})
	const parser = new DOMParser();

	synonymHtml = parser.parseFromString(synonymHtml, "text/html");
	try {
		const synonym = await synonymHtml.querySelector(".synonyms .wording").innerText;
		console.log(await synonym);
		localStorage.setItem("words", JSON.stringify({word, synonym}))
		console.log("synoniem is gevonden");
		foundSynonym = true;
		document.querySelector(".lds-roller").remove();
	} catch (e) {
		console.log("synoniem is nog niet gevonden")
		pickWords();
	}
	//const data = await fetch("https://random-words-api.vercel.app/word").then(res => res.ok ? res.json() : console.error(res));
	//console.log(data);
}