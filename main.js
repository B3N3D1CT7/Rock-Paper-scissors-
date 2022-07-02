//declarations
const menuBar = document.querySelector('.fa-bars');
const closeX = document.querySelector('.fa-x')
const main = document.querySelector('.body');
const nav = document.querySelector('.nav');
const darkBtn = document.querySelector('.dark');
const header = document.querySelector('header');
const icon = document.querySelector('.dark i');
const userData = document.querySelector('.user-data');
const startBtn = document.querySelector('.start-btn');
const userInput = document.querySelector('#game');
const gameStart = document.querySelector('.game-start')
const gameIntro = document.querySelector('main');
const mainGame = document.querySelector('.game');



//functions
function showMenu() {
  nav.style.transform = `scaleX(1)`;
  nav.style.left = `30%`;
}

function hideMenu() {
  main.style.left = `0`;
  nav.style.left = `100%`;
  nav.style.transform = `scaleX(0)`;
  nav.style.transformOrigin = `right`;
}

function lightDark() {
  if (darkBtn.getAttribute('class') === 'dark') {
    darkBtn.setAttribute('class', 'light');
    icon.setAttribute('class', 'fa-solid fa-moon');
    document.body.style.background = `rgba(255,255,255, 0.5)`;
    header.style.color = `rgba(0,0,0,0.7)`;
  } else if (darkBtn.getAttribute('class') === 'light'){
    darkBtn.setAttribute('class', 'dark');
    icon.setAttribute('class', 'fa-solid fa-sun');
    document.body.style.background = `rgba(0,0,0,0.9)`;
    header.style.color = `rgba(255,255,255,0.5)`;
  }
}

function displayGame() {
  userData.style.transform = `scaleY(1)`;
}

function beginGame() {
  gameIntro.parentNode.removeChild(gameIntro);
  mainGame.style.display = 'block';
  mainGame.style.transition = `2s ease`
}

gameStart.addEventListener('click', () => beginGame());


//Event Listeners
menuBar.addEventListener('click', () => showMenu());
closeX.addEventListener('click', () => hideMenu());
darkBtn.addEventListener('click', () => lightDark());
startBtn.addEventListener('click', () => displayGame());
