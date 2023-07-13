/* Scissors Paper Rock Game */

let computerChoice = ['scissors', 'paper', 'rock'];
let playerChoice = '';
let computerScore = 0;
let playerScore = 0;
let round = 0;
let roundWinner = '';
const score = document.querySelector('.score');
const roundwinner = document.querySelector('.roundwinner');
const gamewinner = document.querySelector('.gamewinner');
const roundnumber = document.querySelector('.roundnumber');

function getComputerChoice() {
  computerChoice =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
  console.log(computerChoice);
}

// function getPlayerChoice() {
//   playerChoice = prompt('Scissors Paper or Rock???').toLowerCase();

//   if (
//     playerChoice != 'scissors' &&
//     playerChoice != 'paper' &&
//     playerChoice != 'rock'
//   ) {
//     alert('Must be paper scissors or rock');
//     getPlayerChoice();
//   }
// }

function playRound(e) {
  getComputerChoice();
  playerChoice = e.target.id;

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

function disableButtons() {
  btns.forEach((elem) => {
    elem.disabled = true;
  });
}

function game(e) {
  while (round < 5) {
    playRound(e, computerChoice);

    roundnumber.textContent = `Round: ${round}`;
    roundwinner.textContent = roundWinner;
    score.textContent = `Player Score: ${playerScore}    Computer Score: ${computerScore}`;
    /* Reset Choices */
    computerChoice = ['scissors', 'paper', 'rock'];
    playerChoice = '';
  }

  if (playerScore < computerScore) {
    gamewinner.textContent = 'Computer wins';
    round = 0;
    disableButtons();
  } else if (playerScore > computerScore) {
    gamewinner.textContent = 'Player wins';
    round = 0;
    disableButtons();
  } else if (playerScore === computerScore) {
    gamewinner.textContent = 'Draw!!';
    round = 0;
    disableButtons();
  } else {
    console.error('Something went wrong');
  }

  // roundnumber.textContent = '';
  // roundwinner.textContent = '';
  // score.textContent = '';

  /* Reset variables */
  computerScore = 0;
  playerScore = 0;

  return;
}

// window.addEventListener('click', playRound);

const btns = document.querySelectorAll('button');
btns.forEach((btn) => btn.addEventListener('click', game));
