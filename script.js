"use strict";

const mathButtons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const resultBtn = document.getElementById("result");
const output_operations = document.querySelector(".output-operations");
const output_result = document.querySelector(".output-result");

let str = "";
let firstInput = "";
let secondInput = "";
let previousOperation = "";
let has = false;

function addNum(num) {
  if (has) {
    num = secondInput + num;
    secondInput = num;
  } else {
    num = firstInput + num;
    firstInput = num;
  }
  console.log(firstInput, secondInput, previousOperation);
  updateText();
}

function addOp(op) {
  if (has) {
    calculate();
    has = true;
    firstInput = Number(output_result.textContent);
    secondInput = "";
    previousOperation = op;
  } else {
    has = true;
    previousOperation = op;
  }
  updateText();
}

function clear() {
  has = false;
  previousOperation = "";
  firstInput = "";
  secondInput = "";
  output_operations.textContent = "";
  output_result.textContent = "";
}

function updateText() {
  output_operations.textContent = `${firstInput} ${previousOperation} ${secondInput}`;
}

function calculate() {
  switch (previousOperation) {
    case "+":
      output_result.textContent = Number(firstInput) + Number(secondInput);
      break;
    case "-":
      output_result.textContent = Number(firstInput) - Number(secondInput);
      break;
    case "*":
      output_result.textContent = Number(firstInput) * Number(secondInput);
      break;
    case "/":
      output_result.textContent = (
        Number(firstInput) / Number(secondInput)
      ).toFixed(3);
      break;
  }
}

clearBtn.addEventListener("click", clear);
