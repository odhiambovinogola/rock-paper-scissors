// Keep score values and game status in variables
let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

// Get the elements that show the score and choices on the page
let humanScoreCounter = document.querySelector(".human-score");
let computerScoreCounter = document.querySelector(".computer-score");
let humanSelection = document.querySelector(".human-selection");
let computerSelection = document.querySelector(".computer-selection");
let winner = document.querySelector(".winner-announcement");

// Pick a random move for the computer
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Decide who wins the round
function determineWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "human wins";
  } else {
    return "computer wins";
  }
}

// Play one round of the game
function playRound(humanChoice) {
  // Stop if the game is already finished
  if (gameOver) {
    return;
  }

  // Get the computer move and check the round result
  let computerChoice = getComputerChoice();
  let result = determineWinner(humanChoice, computerChoice);

  // Show the choices the players made
  humanSelection.textContent = humanChoice;
  computerSelection.textContent = computerChoice;

  // Update the score and message for the round result
  if (result === "tie") {
    winner.textContent = "It's a tie";
  } else if (result === "human wins") {
    humanScore++;
    humanScoreCounter.textContent = humanScore;
    winner.textContent = "Winner: You";
  } else {
    computerScore++;
    computerScoreCounter.textContent = computerScore;
    winner.textContent = "Winner: Computer";
  }

  // Check if someone has reached 5 points
  if (humanScore === 5) {
    winner.textContent = "You are the champion!";
    gameOver = true;
    return;
  }

  if (computerScore === 5) {
    winner.textContent = "Computer is the champion!";
    gameOver = true;
  }
}

// Reset all score and display values
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  gameOver = false;

  humanScoreCounter.textContent = humanScore;
  computerScoreCounter.textContent = computerScore;
  humanSelection.textContent = "—";
  computerSelection.textContent = "—";
  winner.textContent = "Winner: —";
}

// Connect each button to the correct game action
const rock = document.querySelector(".rock");
rock.addEventListener("click", () => playRound("rock"));

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => playRound("paper"));

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => playRound("scissors"));

const reset = document.querySelector(".reset-btn");
reset.addEventListener("click", resetGame);
