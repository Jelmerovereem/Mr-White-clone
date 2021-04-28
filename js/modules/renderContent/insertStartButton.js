const main = document.querySelector("main");

export default function insertStartButton() {
	const startBtn = document.createElement("a");
	startBtn.textContent = "Begin spel";
	startBtn.href = "javascript:void(0)";
	startBtn.classList.add("startBtn");
	startBtn.addEventListener("click", () => {
		const userCards = document.querySelectorAll(".playerCard");
		const randomIndexNum = Math.floor(Math.random() * userCards.length);
		console.log(userCards[randomIndexNum].dataset.playername);
		
	})
	main.append(startBtn);
}