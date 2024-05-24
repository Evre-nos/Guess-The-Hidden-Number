"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

const displayScore = (score) => {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  // console.log(guess, typeof guess);

  // prettier-ignore

  // ! When There is no input

  if (!guess)

  {
    displayMessage('No Number');
  }

  // ! When Player Wins

  else if (guess === secretNumber)

  {
    displayMessage("Correct Number");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore)

      {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

  }

  // ! When guess is wrong

  else if (guess !== secretNumber)

    {

      if (score > 1)
        {
        displayMessage(guess > secretNumber ? 'Too High' : 'Too low');

        score--;

        displayScore(score);
        }

      else {

        displayMessage("You lost the game");

        displayScore(0);

      }

    }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = ""; // Reset the background color to the default
  document.querySelector(".number").style.width = "15rem";
});

document.addEventListener("DOMContentLoaded", (event) => {
  const guessInput = document.querySelector(".guess");

  guessInput.addEventListener("mouseenter", () => {
    guessInput.focus();
  });

  guessInput.addEventListener("mouseleave", () => {
    guessInput.blur();
  });
});
