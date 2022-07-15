import { Card } from "./class/card.js";

function readValues(e) {
  let sum = 0;
  e.preventDefault();
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    sum = sum + +input.value;
    input.value = "";
  });
  const percent = ((sum / 400) * 100).toFixed(2);
  let grades = "";
  if (percent <= 100 && percent >= 80) {
    grades = "A";
  }
  if (percent < 80 && percent >= 60) {
    grades = "B";
  }
  if (percent < 60 && percent >= 40) {
    grades = "C";
  }
  if (percent < 40 && percent >= 0) {
    grades = "F";
  }
  const result = document.querySelector(".result");
  result.innerHTML = `Out of 400 your total is ${sum} and is ${percent}%
    Your grade is ${grades}`;
}

function eventReadValues() {
  const form = document.querySelector("form");
  form.addEventListener("submit", readValues);
}
function init() {
  document.body.append(new Card(`Student<br> Grade<br> Calculate`).render());
  eventReadValues();
}
init();
