//get human choice
function getHumanChoice() {
  //ask the user to input a choice and store the choice in a variable
  let humanChoice = prompt("Enter a choice between rock, paper and scissors: ");
  // return the variable
  return humanChoice;
}
console.log(getHumanChoice());

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
console.log(getComputerChoice());

//play one round
// 5 rounds make a game
