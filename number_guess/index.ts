#! /usr/bin/env node

import inquirer from "inquirer";

let randomNumber = Math.floor(Math.random() * 5 + 1);
console.log("Hey there!, Lets see how strong your guesses are...");

let userInput = await inquirer.prompt([
  {
    name: "userName",
    type: "input",
    message: "Before we start please enter your name.",
  },
]);

console.log(
  `So, ${userInput.userName} You have to guess a number between 1-5.`
);

let userGuess = await inquirer.prompt([
  {
    name: "guess",
    type: "number",
    message: "What is your guess?",
  },
]);

if (userGuess.guess === randomNumber) {
  console.log(`Amazing ${userInput.userName} !!, Nice guess.`);
} else {
  console.log("Wronge guess :( . try again you can do it! ");
}
