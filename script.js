'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscoreNum = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (scoreIn) {
  document.querySelector('.score').textContent = scoreIn;
};

const displayNumber = function (numberIn) {
  document.querySelector('.number').textContent = numberIn;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(secretNumber);
    checkForScore();

    // When guess is too high & When guess is too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💢 You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  displayNumber('?');
  document.querySelector('.number').style.width = '15rem';
});

function checkForScore() {
  if (score > highscoreNum) {
    highscoreNum = score;
    document.querySelector('.highscore').textContent = highscoreNum;
  }
}
