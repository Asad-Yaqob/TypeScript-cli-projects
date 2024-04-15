#! /usr/bin/env node

import inquirer from "inquirer";

const userInput = await inquirer.prompt([
  { message: "Enter First Number...", type: "number", name: "firstNumber" },
  { message: "Enter Second Number...", type: "number", name: "secondNumber" },
  {
    message: "Which Opearation You Like to Perform?",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (userInput.operator === "Addition") {
  console.log(
    "Addition of " +
      userInput.firstNumber +
      " and " +
      userInput.secondNumber +
      " is: " +
      userInput.firstNumber +
      userInput.secondNumber
  );
} else if (userInput.operator === "Subtraction") {
  console.log(
    "Subtraction of " +
      userInput.firstNumber +
      " and " +
      userInput.secondNumber +
      " is: " +
      (userInput.firstNumber - userInput.secondNumber)
  );
} else if (userInput.operator === "Multiplication") {
  console.log(
    "Multiplication of " +
      userInput.firstNumber +
      " and " +
      userInput.secondNumber +
      " is: " +
      userInput.firstNumber * userInput.secondNumber
  );
} else if (userInput.operator === "Division") {
  console.log(
    "Division of " +
      userInput.firstNumber +
      " and " +
      userInput.secondNumber +
      " is: " +
      userInput.firstNumber / userInput.secondNumber
  );
} else {
  console.log("Please Select A Valid Operator!!");
}
