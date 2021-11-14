// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const gMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    message: "What is the name of the project?",
    name: "projectName",
  },
  {
    type: "input",
    message:
      "Please describe the project (include motivation, the problem you wanted to solve, and what you learned",
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
    type: "list",
    message: "Choose a license for this project.",
    name: "license",
    choices: [
      "Creative Commons",
      "MIT",
      "Mozilla Public License",
      "Apache License",
      "The Unlicense",
      "Boost Software License",
      "The Do What the Fuck You Want to Public License",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const { projectName, description, installation, usage, credits, license } =
    data;
  fs.writeFile(
    fileName,
    `# ${projectName}
    ## ${description}
    ## Table of Contents 
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    ## Installation
    ${installation}
    ## Usage
    ${usage}

    ## Credits
    ${credits}
    ## License
    ${license}
    ---
    `,
    (err) => (err ? console.error(err) : console.log("README written!"))
  );
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile("GEN.md", response);
  });
}
// Function call to initialize app
init();
