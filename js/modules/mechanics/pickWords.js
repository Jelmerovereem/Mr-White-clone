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
	/*let words = await fetch("assets/wordlist.txt").then(res => {
		//console.log(res)
		return res.ok ? res.text() : res;
	})
	words = words.split(/\n+/)
	let random = Math.floor(Math.random() * words.length);
	const word = words[random];*/

	let allWords = await fetch("assets/words.json").then(res => res.ok ? res.json() : console.log(res));
	allWords = allWords.words;
	let random = Math.floor(Math.random() * allWords.length);
	const words = allWords[random];

	localStorage.setItem("words", JSON.stringify(words))
	foundSynonym = true;
	document.querySelector(".lds-roller").remove();

	/*let randomWord = await fetch("http://random-word-api.herokuapp.com/word?number=1").then(res => res.ok ? res.json() : console.log(res));
	randomWord = randomWord[0];
	console.log(randomWord)
	let synonym;
	try {
		synonym = await fetch(`https://api.wordassociations.net/associations/v1.0/json/search?apikey=9fe2d986-91f7-4786-9476-2b89fccda309&text=${randomWord}&lang=en`).then(res => res.ok ? res.json() : console.log(res));
		synonym = synonym.response[0].items[0].item;
		console.log(synonym)
	} catch (e) {
		console.log(e);
		//pickWords();
	}

	let translatedResult = await fetch(`https://api.mymemory.translated.net/get?q=${randomWord}&langpair=en|nl`).then(res => res.ok ? res.json() : console.log(res));
	let translatedWord = translatedResult.matches[0].translation;
	console.log(translatedWord);

	let translatedSynResult = await fetch(`https://api.mymemory.translated.net/get?q=${synonym}&langpair=en|nl`).then(res => res.ok ? res.json() : console.log(res));
	let translatedSynonym = translatedSynResult.matches[0].translation;
	console.log(translatedSynonym)

	try {
		localStorage.setItem("words", JSON.stringify({word: translatedWord, synonym: translatedSynonym}))
		foundSynonym = true;
		document.querySelector(".lds-roller").remove();
	} catch (e) {
		console.log("synoniem is nog niet gevonden")
		pickWords();
	}*/
	//const data = await fetch("https://random-words-api.vercel.app/word").then(res => res.ok ? res.json() : console.error(res));
	//console.log(data);
}