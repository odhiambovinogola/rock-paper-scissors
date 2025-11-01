// step 1: Logic to get the computer choice
// - create a function getComputerChoice
// - randomly returns “rock”, “paper” or “scissors”

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let random = choices[Math.floor(Math.random() * choices.length)];
  return random;
}

// Step 2: logic to get the human choice
// - function name: getHumanChoice
// - get user input
// - return user input

function getHumanChoice() {
  let choice = prompt("What is your pick?", "rock");
  return choice;
}
