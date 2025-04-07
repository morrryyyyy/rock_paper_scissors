//get human choice
//ask the user to input a choice and store the choice in a variable
function getHumanChoice() {
  let humanChoice = prompt("Enter a choice between rock, paper and scissors: ");
  // return the variable
  return humanChoice;
}
console.log(getHumanChoice());

// get computer choice
//get the computer to give out random numbers and store in a variable
function getComputerChoice() {
  let computerChoice = Math.random();
  return computerChoice;
}
console.log(getComputerChoice());
// turn those variables into the options
//return the variable
//play one round
// 5 rounds make a game
