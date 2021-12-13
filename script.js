"use strict";
// variables
const diceImg = document.querySelector(".dice");
let score0 = +document.getElementById("score--0").textContent;
let score1 = +document.getElementById("score--1").textContent;
let current0 = +document.getElementById("current--0").textContent;
let current1 = +document.getElementById("current--1").textContent;
const diceRoll = document.querySelector(".btn--roll");
const diceHold = document.querySelector(".btn--hold");

// intial values
diceImg.classList.add("hide");
let initialPlayer = 0;
let playing = true;

//working
diceRoll.addEventListener("click", function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceImg.src = `dice-${dice}.png`;
    diceImg.classList.remove("hide");
    if (dice !== 1) {
      let player = `current--${initialPlayer}`;
      if (player === "current--0") {
        current0 += dice;
      } else {
        current1 += dice;
      }
      document.getElementById("current--0").textContent = current0;
      document.getElementById("current--1").textContent = current1;
    } else {
      document.getElementById("current--0").textContent = 0;
      document.getElementById("current--1").textContent = 0;
      document.querySelector(".player--0").classList.toggle("player--active");
      document.querySelector(".player--1").classList.toggle("player--active");
      current0 = 0;
      current1 = 0;
      if (initialPlayer == 0) {
        initialPlayer = 1;
      } else {
        initialPlayer = 0;
      }
    }
  }
});

diceHold.addEventListener("click", function () {
  if (playing) {
    let player = `current--${initialPlayer}`;
    if (player === "current--0") {
      score0 += current0;
    } else {
      score1 += current1;
    }
    document.getElementById("score--0").textContent = score0;
    document.getElementById("score--1").textContent = score1;
    document.getElementById("current--0").textContent = 0;
    document.getElementById("current--1").textContent = 0;
    current0 = 0;
    current1 = 0;
    document.querySelector(".player--0").classList.toggle("player--active");
    document.querySelector(".player--1").classList.toggle("player--active");
    if (initialPlayer == 0) {
      initialPlayer = 1;
    } else {
      initialPlayer = 0;
    }
  }
  if (score0 >= 100) {
    playing = false;
    document.getElementById("current--0").textContent = "You Won!";
    document.getElementById("current--1").textContent = "You Lost!";
    document.querySelector(".player--0").classList.add("player--winner");
  } else if (score1 >= 100) {
    playing = false;
    document.getElementById("current--0").textContent = "You Lost!";
    document.getElementById("current--1").textContent = "You Won!";
    document.querySelector(".player--1").classList.add("player--winner");
  }
});

document.querySelector(".btn--new").addEventListener("click", function () {
  diceImg.classList.add("hide");
  initialPlayer = 0;
  playing = true;
  score0 = 0;
  score1 = 0;
  current0 = 0;
  current1 = 0;
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.getElementById("score--0").textContent = 0;
  document.getElementById("score--1").textContent = 0;
  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = 0;
});
