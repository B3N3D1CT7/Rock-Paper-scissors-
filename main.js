//Made by Benedict
const introduction = document.getElementById('introduction');
const initBtn = document.querySelector('#init-btn');
const form = document.querySelector('.form');
const userName = document.getElementById('user-name');
const startBtn = document.getElementById('start-btn');
const mainGame = document.getElementById('main-game');
const playerName = document.querySelectorAll('.player-name');
const userPlay = document.querySelector('.user-play');
const compPlay = document.querySelector('.comp-play');
const playerScore = document.getElementById('player-score');
const drawScore = document.getElementById('draw-score');
const computerScore = document.getElementById('computer-score');
const result = document.getElementById('result');
const choices = document.querySelectorAll('.options img');
const resetBtn = document.getElementById('reset');
const imgResult = document.querySelector('.img-result')

let playerChoice = document.getElementById('player-choice');
let computerChoice = document.getElementById('computer-choice');

let score = {
  player: 0,
  computer: 0,
  draw: 0
}

let gameProps = [
  {
    name: 'rock',
    beats: 'scissors'
  },
  {
    name: 'paper',
    beats: 'rock'
  },
  {
    name: 'scissors',
    beats: 'paper'
  }
  ]
  
  let playerSelection,
  computerSelection,
  userCount = 1;
  
  function computerPlay() {
    let random = Math.floor(Math.random() * gameProps.length);
    return gameProps[random];
  }
    

initBtn.addEventListener('click', displayForm)
startBtn.addEventListener('click', displayGame)
choices.forEach((choice) => {
  choice.addEventListener('click', playRound)
})

function displayForm() {
  form.style.display = 'block';
  userName.focus();
}

function displayGame() {
  introduction.classList.add('active');
  mainGame.style.display = 'block';
  playerName.forEach((name) => {
    name.textContent = userName.value
  })
}

function playRound(e) {
  playerSelection = e.target.id;
  computerSelection = computerPlay();
  output(playerSelection, computerSelection);
  winner(playerSelection, computerSelection);
  drawScore.textContent = `${score.draw}`;
  computerScore.textContent = `${score.computer}`;
  playerScore.textContent = `${score.player}`;
  animation();
  imgResult.style.display = 'flex';
}

function output(playerSelection, computerSelection) {
  playerChoice.setAttribute('src', `${playerSelection}.svg`)
  computerChoice.setAttribute('src', `${computerSelection.name}.svg`);
  userPlay.textContent = playerSelection;
  compPlay.textContent = computerSelection.name;
}

function winner(olayerSelection, computerSelection) {
  if (playerSelection === computerSelection.name) {
    draw();
  } else if (playerSelection == 'rock') {
      if (computerSelection.beats === playerSelection) {
        lose();
      } else {
        win();
      }
    } else if (playerSelection == 'paper') {
      if (computerSelection.beats === playerSelection) {
        lose();
      } else {
        win();
      }
    } else if (playerSelection == 'scissors') {
      if (computerSelection.beats === playerSelection) {
        lose()
      } else {
        win()
      }
    }
    userCount++;
}

function draw() {
  result.textContent = 'DRAW';
  result.style.color = `white`;
  userPlay.style.color = `#111`;
  compPlay.style.color = `#111`;
  score.draw++;
  drawScore.style.color = 'crimson';
  playerScore.style.color = `#111`;
  computerScore.style.color = `#111`;
}

function win() {
  result.textContent = 'WIN';
  result.style.color = `green`;
  userPlay.style.color = `green`;
  compPlay.style.color = `crimson`;
  score.player++;
  playerScore.style.color = 'green';
  drawScore.style.color = `#111`;
  computerScore.style.color = `#111`;
}

function lose() {
  result.textContent = 'LOSE';
  result.style.color = `crimson`;
  userPlay.style.color = `crimson`;
  compPlay.style.color = `green`;
  score.computer++;
  computerScore.style.color = 'green';
  drawScore.style.color = `#111`;
  playerScore.style.color = `#111`;
}

function animation() {
  if (result.textContent !== 'LOSE' && result.textContent !== 'DRAW') {
    playerChoice.style.animation = `reduce .7s linear infinite`;
    computerChoice.style.animation = 'none';
  } else if (result.textContent !== 'WIN' && result.textContent !== 'DRAW') {
    playerChoice.style.animation = 'none';
    computerChoice.style.animation = `reduce .7s linear infinite`;
  } else {
    playerChoice.style.animation = 'none';
    computerChoice.style.animation = 'none';
  }
}

resetBtn.addEventListener('click', resetGame);

function resetGame() {
  drawScore.textContent = `0`;
  computerScore.textContent = `0`;
  playerScore.textContent = `0`;
  drawScore.style.color = `#111`;
  computerScore.style.color = `#111`;
  playerScore.style.color = `#111`;
  score.player = 0;
  score.draw = 0;
  score.computer = 0;
  result.textContent = '';
  userPlay.textContent = '';
  compPlay.textContent = '';
  playerChoice.style.animation = 'none';
  computerChoice.style.animation = 'none';
  imgResult.style.display = 'none';
}

const otherBtn = document.querySelector('.other'),
projects = document.querySelector('.projects'),
nav = document.querySelector('nav'),
menu = document.querySelector('#menu-bar');

menu.addEventListener('click', () => {
  if (menu.classList.contains('fa-bars')) {
    nav.style.left = `0`;
    menu.classList.replace('fa-bars', 'fa-x')
    menu.style.transform = `rotate(180deg)`;
  } else {
    nav.style.left = `-100%`;
    menu.classList.replace('fa-x', 'fa-bars')
    menu.style.transform = `rotate(-180deg)`;
  }
})


otherBtn.addEventListener('click', () => {
  projects.classList.toggle('active');
})
