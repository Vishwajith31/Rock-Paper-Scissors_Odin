"use strict";

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}
let playing = true;
let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;

const player = document.querySelector("#player-score");
player.textContent = `Player : ${playerScore}`;

const computer = document.querySelector("#computer-score");
computer.textContent = `Computer : ${computerScore}`;

const buttons = document.querySelectorAll(".btn");

const output = document.querySelector(".score-info");
output.textContent = "Choose your weapon";

const msg = document.querySelector(".score-msg");
msg.textContent = "First to score 5 points wins the game!";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerChoice = button.id.toUpperCase();
    playGame();
  });
});

function playround() {
  computerChoice = getComputerChoice().toUpperCase();
  console.log(playerChoice);
  console.log(computerChoice);
  if (playerChoice === computerChoice) {
    output.textContent = "It's a tie!";
    msg.textContent = `${playerChoice} ties with ${computerChoice}`;
  }
  if (
    (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK")
  ) {
    playerScore++;
    player.textContent = `Player : ${playerScore}`;

    output.textContent = "You won!";
    msg.textContent = `${playerChoice} beats ${computerChoice}`;
  } else if (
    (computerChoice === "ROCK" && playerChoice === "SCISSORS") ||
    (computerChoice === "SCISSORS" && playerChoice === "PAPER") ||
    (computerChoice === "PAPER" && playerChoice === "ROCK")
  ) {
    computerScore++;
    computer.textContent = `Computer : ${computerScore}`;
    output.textContent = "You lost!";
    msg.textContent = `${playerChoice} is beaten by ${computerChoice}`;
  }
}
console.log(playround());

function playGame() {
  if (playing) {
    playround();
    if (playerScore === 5) {
      output.textContent = "You Won the Game! Congrats";
      playing = false;
    }
    if (computerScore === 5) {
      output.textContent = "You lost the Game";
      playing = false;
    }
  }
}

const reset = document.querySelector(".cta");
reset.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playing = true;
  output.textContent = "Choose your weapon";
  msg.textContent = "First to score 5 points wins the game!";
  player.textContent = `Player : ${playerScore}`;
  computer.textContent = `Computer : ${computerScore}`;
});
