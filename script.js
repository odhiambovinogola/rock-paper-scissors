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

// Step 3: Intial track of the players score

let humanScore = 0;
let computerScore = 0;

// Step 4: Logic to play a single round

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  let result;

  if (computerChoice === humanChoice) {
    result = `It's a tie you both picked ${humanChoice}`;
  } else if (
    (computerChoice === "scissors" && humanChoice === "rock") ||
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors")
  ) {
    result = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    result = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }

  return result;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const roundResult = playRound(humanSelection, computerSelection);

console.log(roundResult);
