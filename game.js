let playerName = document.querySelector('player-name');
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score')
const btn = document.querySelector('.btn');
const para = document.querySelector('.result');
const para1 = document.querySelector('.comp-game');
let paraDraw = document.querySelector('.draw-score');
const winner = document.querySelector('.win-text');
const countScore = document.querySelector('.user-count');
let playerOverall = document.querySelector('.p-overall');
let computerOverall = document.querySelector('.c-overall');
let drawOverall = document.querySelector('.d-overall');

//radio buttons declaration
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const rockC = document.querySelector('#rockC');
const paperC = document.querySelector('#paperC');
const scissorsC = document.querySelector('#scissorsC');
let newGameBtn;

 const gameTools = ['rock', 'paper', 'scissors'];

function computerPlay() {
  let random = Math.floor(Math.random() * gameTools.length);
  return gameTools[random];
}

let choice;
function playerPlay() {
  if (rock.checked) {
    choice = 'rock';
  } else if (paper.checked) {
    choice = 'paper';
  } else {
    choice = 'scissors';
  }
  return choice;
}

let computerSelection;
let playerSelection;

computerSelection = computerPlay();

function playRound() {
  playerSelection = playerPlay();
  
  
    if (playerSelection === computerSelection) {
      para.textContent = 'Draw';
      para.style.color = 'grey';
      para1.textContent = `Computer played ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      para.textContent = 'You win! Paper beats Rock';
      para.style.color = 'green';
      para1.textContent = `Computer played ${computerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      para.textContent = 'You lose! Rock beats Scissors';
      para.style.color = 'red';
      para1.textContent = `Computer chose ${computerSelection}`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      para.textContent = 'You lose! Paper beats Rock';
      para.style.color = 'red';
      para1.textContent = `Computer chose ${computerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      para.textContent = 'You win! Scissors beats Paper';
      para.style.color = 'green';
      para1.textContent = `Computer chose ${computerSelection}`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      para.textContent = 'You win! Rock beats Scissors';
      para.style.color = 'green';
      para1.textContent = `Computer chose ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
      para.textContent = 'You lose! Scissors beats Paper';
      para.style.color = 'red';
      para1.textContent = `Computer chose ${computerSelection}`;
    }
}

let userCount = 1;
let userScore = 0;
let compScore = 0;
let drawScore = 0;
let scoreU = 0;
let scoreC = 0;
let count = 9;
let pOverall = 0;
let cOverall = 0;
let dOverall = 0;

function game() {
  
  if (userCount === 11) {
    para.textContent = 'Game Over!';
    para.style.color = 'grey';
    para1.textContent = '';
    computerOverall.textContent = `Computer: ${cOverall}`;drawOverall.textContent = `Draws: ${dOverall}`;
     playerOverall.textContent = `${userInput.value}: ${pOverall}`;
    setGameOver();
  } else {
    playRound();
    if (para.textContent.includes('You win')) {
      userScore++;
      playerScore.textContent = `(${userScore})`;
    } else if (para.textContent.includes('You lose')) {
      compScore++;
      computerScore.textContent = `(${compScore})`;
    } else if (para.textContent === 'Draw') {
      drawScore++
      paraDraw.textContent = `Draws: ${drawScore}`;
    }
    countScore.textContent = `Trials left: ${count}`;
     computerOverall.textContent = `Computer: ${cOverall}`;drawOverall.textContent = `Draws: ${dOverall}`;
     playerOverall.textContent = `${userInput.value}: ${pOverall}`;
   reset();
  } 
  
  userCount++;
  count--;
}

btn.addEventListener('click', () => game());

function reset() {
  computerSelection = computerPlay();
}

function setGameOver() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
  btn.disabled = true;
  
  para.textContent = '';
  if (userScore > compScore) {
    winner.textContent = 'YOU WIN!!';
    winner.style.color = 'green';
  } else if (compScore > userScore) {
    winner.textContent = 'COMPUTER WINS!';
    winner.style.color = 'grey';
  } else if (userScore === compScore) {
    winner.textContent = 'DRAW!!';
    winner.style.color = 'grey';
  }
  
  newGameBtn = document.createElement('button');
  newGameBtn.setAttribute('class', 'new-game');
  newGameBtn.textContent = 'New Game';
  mainGame.appendChild(newGameBtn);
  
  newGameBtn.addEventListener('click', () => restartGame());
}

function restartGame() {
  
  if (winner.textContent.includes('YOU WIN')) {
    pOverall++;
    playerOverall.textContent = `${userInput.value}: ${pOverall}`;
  } else if (winner.textContent.includes('COMPUTER WINS')) {
    cOverall++;
    computerOverall.textContent = `Computer: ${cOverall}`;
    playerOverall.textContent = `${userInput.value}: ${pOverall}`;
  } else if (winner.textContent.includes('DRAW')) {
    dOverall++;
    drawOverall.textContent = `Draws: ${dOverall}`;
    playerOverall.textContent = `${userInput.value}: ${pOverall}`;
  }
  newGameBtn.parentNode.removeChild(newGameBtn);
  
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  btn.disabled = false;
 
  
  userCount = 1;
  userScore = 0;
  compScore = 0;
  drawScore = 0;
  scoreU = 0;
  scoreC = 0;
  count = 10;
  
  para.textContent = `New Game`;
  playerScore.textContent = `(0)`;
  computerScore.textContent = `(0)`;
  para1.textContent = `Computer's choice will be shown here`;
  paraDraw.textContent = `Draws: 0`;
  winner.textContent = '';
  countScore.textContent = `Trials left: 10`;
  
  game();
}

