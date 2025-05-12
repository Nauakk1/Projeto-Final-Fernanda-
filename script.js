const options = ["Pedra", "Papel", "Tesoura"];
const sounds = {
    victory: new Audio("sounds/victory.mp3"),
    defeat: new Audio("sounds/defeat.mp3"),
}

const result = document.getElementById("result");
const playerScoreEl = document.getElementById("player");
const pcScoreEl = document.getElementById("pc");

let playerScore = 0;
let pcScore = 0;

const play = (playerOption) => {
  const pcOption = options[Math.floor(Math.random() * 3)];

  if (playerOption === pcOption) {
    result.innerHTML = `Empate! Você e o computador escolheram ${playerOption}`;
    if (playerScore > 0 && pcScore > 0) {
      playerScore--;
      pcScore--;
    }
    sounds.defeat.play();
  } else if (
    (playerOption === "Pedra" && pcOption === "Tesoura") ||
    (playerOption === "Papel" && pcOption === "Pedra") ||
    (playerOption === "Tesoura" && pcOption === "Papel")
  ) {
    result.innerHTML = `Você ganhou! ${playerOption} vence ${pcOption}`;
    playerScore++;
    sounds.victory.play();
  } else {
    result.innerHTML = `Você perdeu! ${pcOption} vence ${playerOption}`;
    pcScore++;
    sounds.defeat.play();
  }

  playerScoreEl.textContent = playerScore;
  pcScoreEl.textContent = pcScore;
};
