/* Scissors Paper Rock Game */

let computerChoice = ['scissors', 'paper', 'rock'];
let playerChoice = '';
let computerScore = 0;
let playerScore = 0;
let round = 0;

function getComputerChoice() {
  computerChoice =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
  console.log(computerChoice);
}

function getPlayerChoice() {
  playerChoice = prompt('Scissors Paper or Rock???').toLowerCase();

  if (
    playerChoice != 'scissors' &&
    playerChoice != 'paper' &&
    playerChoice != 'rock'
  ) {
    alert('Must be paper scissors or rock');
    getPlayerChoice();
  }
}

function playRound() {
  getComputerChoice();
  getPlayerChoice();

  if (playerChoice === 'paper' && computerChoice === 'rock') {
    console.log('You win Paper beats rock');
    playerScore += 1;
    round += 1;
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    console.log('Computer wins Scissors beats paper');
    computerScore += 1;
    round += 1;
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    console.log('Computer wins Rock beats Paper');
    computerScore += 1;
    round += 1;
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    console.log('You win Scissors beats Paper');
    playerScore += 1;
    round += 1;
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    console.log('Computer wins Paper beats Rock');
    computerScore += 1;
    round += 1;
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    console.log('You win Rock beats Scissors');
    playerScore += 1;
    round += 1;
  } else if (playerChoice === computerChoice) {
    console.log('Tie!!');
    round += 1;
  } else {
    console.error('Something Went Wrong');
  }
}

function game() {
  while (round < 5) {
    playRound(playerChoice, computerChoice);

    /* Reset Choices */
    computerChoice = ['scissors', 'paper', 'rock'];
    playerChoice = '';
  }

  if (playerScore < computerScore) {
    console.log('Computer wins');
  } else if (playerScore > computerScore) {
    console.log('Player wins');
  } else if (playerScore === computerScore) {
    console.log('Draw!!');
  } else {
    console.error('Something went wrong');
  }

  /* Reset variables */
  computerScore = 0;
  playerScore = 0;
  round = 0;
}

game();

console.log(playerChoice);
