// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "Please enter the name of the creator",
      name: "name",
    },
    {
      type: "input",
      message: "What is the name of the project?",
      name: "projectName",
    },
    {
      type: "input",
      message: "Please describe the project",
      name: "description",
    },
    {
      type: "input",
      message: "Why was this project built?",
      name: "reason",
    },
  ])
  .then((response) => {
    console.log(response);
  });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
