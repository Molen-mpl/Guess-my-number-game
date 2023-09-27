"use strict";

//RANDOM SECRET NUMBER:
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//SET THE SCORE TO 20
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);

  //When there is no input or 0 (falsy value).
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";

    //When player wins the game
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    //HIGHSCORE BUTTON
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🚨 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }

    //When guess is too low.
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🚨 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//RESET BUTTON "AGAIN!"
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
