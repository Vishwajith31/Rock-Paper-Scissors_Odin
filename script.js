"use strict";

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

let playerScore = 0;
let computerScore = 0;
// let roundWinner = "";

function playround() {
  let computerSelection = getComputerChoice().toUpperCase();
  let playerSelection = prompt("Rock Or paper or Scissors").toUpperCase();
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection === computerSelection) return "tie";
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    playerScore++;
    return "player";
  } else if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK")
  ) {
    computerScore++;
    return "computer";
  }
}
console.log(playround());

function game() {
  while (playerScore !== 5 || computerScore !== 5) {
    console.log(playround());
    if (playerScore === 5) return "Player Won!!";
    else if (computerScore == 5) return "Computer Won!!";
  }
}

console.log(game());
