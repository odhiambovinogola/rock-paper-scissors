// step 1: Logic to get the computer choice
// - create a function getComputerChoice
// - randomly returns “rock”, “paper” or “scissors”

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let random = choices[Math.floor(Math.random() * choices.length)];
  return random;
}
