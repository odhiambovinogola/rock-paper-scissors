# Rock Paper Scissors — Pseudocode

// Global state — persists across rounds
humanScore = 0
computerScore = 0
choices = ["rock", "paper", "scissors"]


// Returns a random choice from the choices list
function getComputerChoice():
    random → any number >= 0 and < 3
    computerChoice → choices[random]
    return computerChoice


// Compares both choices and returns the round result
function determineWinner(humanChoice, computerChoice):
    if humanChoice === computerChoice → return "tie"
    if humanChoice is "rock" and computerChoice is "scissors" → return "human wins"
    if humanChoice is "paper" and computerChoice is "rock" → return "human wins"
    if humanChoice is "scissors" and computerChoice is "paper" → return "human wins"
    else → return "computer wins"


// Runs a single round — updates scores, checks for champion
function playRound(humanChoice):
    computerChoice → getComputerChoice()
    result → determineWinner(humanChoice, computerChoice)

    if result is "human wins" → humanScore + 1, display new score
    if result is "computer wins" → computerScore + 1, display new score
    if result is "tie" → no score change, display "tie"

    if humanScore === 5 → display "human is champion, game over", end game
    if computerScore === 5 → display "computer is champion, game over", end game


// Button listeners — capture human choice and trigger round
click rock button → playRound("rock")
click paper button → playRound("paper")
click scissors button → playRound("scissors")
