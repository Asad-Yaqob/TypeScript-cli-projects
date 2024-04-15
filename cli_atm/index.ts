#! /usr/bin/env node

import inquirer from "inquirer";

let totalBalance = 15000;
const atmPin = 2003;

console.log("Welcome To The Dummy Atm !!! \n");
console.log(`Total Balance: ${totalBalance}`);
console.log(`Atm Pin: ${atmPin} \n `);

let inputPin = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Please enter your PIN",
  },
]);

if (inputPin.pin === atmPin) {
  let accountDetails = await inquirer.prompt([
    {
      name: "accountType",
      type: "list",
      message: "Please select your account type",
      choices: ["Current Account", "Savings Account"],
    },
    {
      name: "transactionType",
      type: "list",
      message: "Please select your transaction type",
      choices: ["Fast Cash", "Cash Withdrawal"],
    },
  ]);

  if (accountDetails.transactionType === "Cash Withdrawal") {
    let withdrawalAmount = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Please enter the amount you wish to withdraw",
      },
    ]);

    if (totalBalance >= withdrawalAmount.amount) {
      totalBalance -= withdrawalAmount.amount;
      console.log(`Transaction Successfull! total balance: ${totalBalance}`);
    } else {
      console.log("Insufficient balance to withdraw");
    }
  } else {
    let fastCastAmount = await inquirer.prompt([
      {
        name: "fastAmount",
        message: "Please select the amount you wish to fast cash",
        type: "list",
        choices: ["2000", "5000", "8000", "10000"],
      },
    ]);

    if (totalBalance >= fastCastAmount.fastAmount) {
      totalBalance -= fastCastAmount.fastAmount;
      console.log(`Transaction Successfull! total balance: ${totalBalance}`);
    } else {
      console.log("Insufficient balance to withdraw");
    }
  }
} else {
  console.log("Incorrect pin number");
}
