// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
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
      message: "What is the installation process for your project",
      name: "installation",
    },
    {
      type: "input",
      message: "How can someone use your project",
      name: "usage",
    },
    {
      type: "input",
      message: "Who is credited on this project",
      name: "credits",
    },
    {
      type: "input",
      message: "How is this project licensed?",
      name: "license",
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
