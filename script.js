"use strict";

const mathButtons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const resultBtn = document.getElementById("result");
const output_operations = document.querySelector(".output-operations");
const output_result = document.querySelector(".output-result");

let firstInput = "";
let secondInput = "";
let currentOperation = "";
let inSecondInput = false;

function addNum(num) {
  if (inSecondInput) {
    secondInput = secondInput + num;
  } else {
    firstInput = firstInput + num;
  }
  updateText();
}

function addOp(op) {
  //If is in second input
  if (inSecondInput) {
    //Calculate before new Operation
    calculate();
    firstInput = output_result.textContent;
    secondInput = "";

    currentOperation = op;
  } else {
    inSecondInput = true;
    currentOperation = op;
  }
  updateText();
}

function clear() {
  //First input
  inSecondInput = false;

  //Clear Math
  currentOperation = "";
  firstInput = "";
  secondInput = "";

  //Clear UI
  output_result.textContent = "";
  updateText();
}

function updateText() {
  output_operations.textContent = `${firstInput} ${currentOperation} ${secondInput}`;
}

function calculate() {
  switch (currentOperation) {
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
      ).toFixed(2);
      break;
    case "%":
      output_result.textContent = Number(firstInput) % Number(secondInput);
      break;
  }
}

clearBtn.addEventListener("click", clear);
