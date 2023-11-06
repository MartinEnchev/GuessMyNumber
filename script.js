'use strict'

const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = generateSecretNumber();
console.log(`secret number: ${secretNumber}`);
let score = 20;
let highscore = 0;

const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

let guessNumber = document.querySelector('.guess');
let messageObj = document.querySelector('.message');


checkButton.addEventListener('click', function () {
  const guess = Number(guessNumber.value);

  if (!guess) {
    messageObj.textContent = 'No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    messageObj.textContent = 'Correct Number';
  
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }  
  } else if (guess !== secretNumber) {
    let message = '';
    guess > secretNumber ? message = 'too high' : message = 'too low';
    messageObj.textContent = message;

    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      messageObj.textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

againButton.addEventListener('click', function(){
  score = 20;
  secretNumber = generateSecretNumber();
  messageObj.textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  guessNumber.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});