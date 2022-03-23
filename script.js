'use strict';
const guess = document.querySelector('.guess');
let numbers = Math.floor(Math.random() * 30+1);
const number = document.querySelector('.number');
const score = document.querySelector('.score').textContent;
const score1 = document.querySelector('.score');
const massages = document.querySelector('.message');
let scores = parseInt(score);
const highscore= document.querySelector('.highscore').textContent;
let highscores = parseInt(highscore);
///check click
document.querySelector('.check').addEventListener('click', () => {
  // incase there a input oucer
  if (guess.value) {
    ///incase win:
    if (guess.value === numbers.toString()) {
      massages.innerHTML = 'yay right number🎉🎉';
      number.innerHTML = numbers;
      document.querySelector('body').style.backgroundColor = '#60b347';
      number.style.width = '8em';
      // save the score 
      if (scores > highscores) {
     highscores= scores;
     document.querySelector('.highscore').textContent = highscores;
      }
      //incase was low
    } else if (guess.value < numbers) {
      if (scores > 1) {
        massages.textContent = 'tooo low ';
        scores--;
        score1.textContent = scores;
        // console.log(typeof numbers, numbers);
      } else {
        //in case it ran out of guess number
        massages.innerHTML = 'you have lost the game';
      } //incse was high
    } else if (guess.value > numbers) {
      if (scores > 1) {
        massages.textContent = 'tooo high ';
        scores--;
        score1.textContent = scores;
        // console.log(typeof numbers, numbers);
      } else {
        //in case it ran out of guess number
        massages.innerHTML = 'you have lost the game';
      }
    } //incase there is no input number
  } else {
    massages.textContent = 'write ur number';
  }
});
// again click and restore the game
document.querySelector('.again').addEventListener('click', () => {
 numbers = Math.floor(Math.random() * 30+1);
  massages.textContent = 'Start guessing...';
  scores = parseInt(score)
  document.querySelector('body').style.backgroundColor = 'rgb(2, 46, 46)';
  number.innerHTML = '?';
  number.style.width = '15rem';
  guess.value = '';
  score1.innerHTML = parseInt(score);
});
