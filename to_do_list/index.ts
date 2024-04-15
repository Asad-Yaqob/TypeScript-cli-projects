#! /usr/bin/env node

import inquirer from "inquirer";

let toDoList:string[] = [];
let condition = true;

console.log("Welcome to the greatest command line todo list program!");

while(condition){
let addTask = await inquirer.prompt([
    {
     name : "addTask",
     type : "input",
     message : "Enter the task you want to add..."
    },
    {
    name : "addMore",
    type: "confirm",
    message: "Would you like to add more tasks in your todo list?",
    default:"false"
    }
]);
toDoList.push(addTask.addTask);
condition = addTask.addMore;
// console.log(`Here is your list of tasks: ${toDoList} \n`);
}

let toShowList = await inquirer.prompt([
    {
        name: "showList",
        type: "confirm",
        message: "Would you like to see your todo list?",
        default:"false"
    }
])

if (toShowList.showList === true){
console.log(`Here is your list of tasks: ${toDoList} \n`);
}
