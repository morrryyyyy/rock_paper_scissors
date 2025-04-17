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

//play one round
function playRound(humanChoice, computerChoice) {
  //make choices case-insensitive
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  //compare choices
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    console.log(`${humanChoice} beats ${computerChoice}!`);
    humanScore++;
  } else {
    console.log(`${computerChoice} beats ${humanChoice}!`);
    computerScore++;
  }
}
// 5 rounds make a game
// Play 5 rounds and show the final score
for (let round = 1; round <= 5; round++) {
  console.log(`\nRound ${round}`);
  let humanChoice = getHumanChoice(); // Get human's choice
  let computerChoice = getComputerChoice(); // Get computer's choice
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  playRound(humanChoice, computerChoice); // Play the round
}

// After 5 rounds, display the final scores
console.log("\nGame Over!");
console.log(`Final Score - You: ${humanScore} | Computer: ${computerScore}`);

if (humanScore > computerScore) {
  console.log("You win the game!");
} else if (humanScore < computerScore) {
  console.log("You lose the game!");
} else {
  console.log("It's a tie game!");
}
