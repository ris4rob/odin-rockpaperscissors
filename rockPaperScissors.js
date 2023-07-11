/* Scissors Paper Rock Game */

let computerChoice = ['scissors', 'paper', 'rock'];
let playerChoice = '';
let computerScore = 0;
let playerScore = 0;
let round = 0;
let roundWinner = '';

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
    playerScore += 1;
    round += 1;
    roundWinner = 'You win Paper beats rock';
    return roundWinner;
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    computerScore += 1;
    round += 1;
    roundWinner = 'Computer wins Scissors beats paper';
    return roundWinner;
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    computerScore += 1;
    round += 1;
    roundWinner = 'Computer wins Rock beats Paper';
    return roundWinner;
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    playerScore += 1;
    round += 1;
    roundWinner = 'You win Scissors beats Paper';
    return roundWinner;
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    computerScore += 1;
    round += 1;
    roundWinner = 'Computer wins Paper beats Rock';
    return roundWinner;
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    playerScore += 1;
    round += 1;
    roundWinner = 'You win Rock beats Scissors';
    return roundWinner;
  } else if (playerChoice === computerChoice) {
    round += 1;
    roundWinner = 'Tie!!';
    return roundWinner;
  } else {
    console.error('Something Went Wrong');
  }
}

function game() {
  while (round < 5) {
    playRound(playerChoice, computerChoice);

    console.log(roundWinner);
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

function btnClick(e) {
  console.log(e.target.id);
}

window.addEventListener('click', btnClick);

const btns = document.querySelectorAll('button');
btns.forEach((btn) => btn.addEventListener('click', btnClick));

game();

console.log(playerChoice);
