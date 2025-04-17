const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

// get computer choice
function getComputerChoice() {
  //get the computer to give out random numbers and store in a variable
  let computerChoice = Math.random();
  // turn those variables into the options
  if (computerChoice < 0.33) {
    computerChoice = "rock";
  } else if (computerChoice < 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  //return the variable
  return computerChoice;
}

//store the scores
let humanScore = 0;
let computerScore = 0;
const roundResult = document.querySelector("#round-result");
const scoreDisplay = document.querySelector("#score");
const winnerAnnouncement = document.querySelector("#winner-announcement");

//play one round
function playRound(humanChoice, computerChoice) {
  //make choices case-insensitive
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  //compare choices
  if (humanChoice === computerChoice) {
    roundResult.textContent = `${humanChoice} ties with ${computerChoice}`;
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    roundResult.textContent = `${humanChoice} beats ${computerChoice}!`;
    humanScore++;
  } else {
    roundResult.textContent = `${computerChoice} beats ${humanChoice}!`;
    computerScore++;
  }
  scoreDisplay.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

  // Check if game over
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      winnerAnnouncement.textContent = "🎉 You win the game!";
    } else {
      winnerAnnouncement.textContent = "💻 Computer wins the game!";
    }

    // Disable the buttons
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}
