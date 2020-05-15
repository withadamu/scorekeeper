let p1button = document.querySelector("#p1b");
let p2button = document.querySelector("#p2b");
let resetButton = document.querySelector("#resetScores")
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let numInput = document.querySelector("input");
let winningScoreDisplay = document.querySelector("p span");
let gameWinner = document.querySelector("#winner");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 10;

p1button.addEventListener("click", () => {
	if(!gameOver){
		p1Score++
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameWinner.textContent = "Congratulations!!! Player 1 Wins.";
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}

});

p2button.addEventListener("click", () => {
	if(!gameOver){
		p2Score++
		if(p2Score === winningScore) {
			p2Display.classList.add("winner");
			gameWinner.textContent = "Congratulations!!! Player 2 Wins.";
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", () => {
	resetGame()	;
});

const resetGame = () => {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	p1button.classList.remove("disab");
	p2button.classList.remove("disab");
	gameWinner.textContent = "";
	gameOver = false;
}

numInput.addEventListener("change", () => {
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	resetGame();
});