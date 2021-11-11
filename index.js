// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

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
    message: "Enter the path to a screenshot of the project",
    name: "imagePath",
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const {
    projectName,
    description,
    installation,
    usage,
    credits,
    license,
    imagePath,
  } = data;
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
    What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
    ## Usage
    Provide instructions and examples for use. Include screenshots as needed.
   
    <img src=${imagePath}>

    ## Credits
    List your collaborators, if any, with links to their GitHub profiles.
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    If you followed tutorials, include links to those here as well.
    ## License
    The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    ---
    `,
    (err) => (err ? console.error(err) : console.log("README written!"))
  );
}

// TODO: Create a function to initialize app
function init() {}
console.log(response);
writeToFile("README.md", response);
// Function call to initialize app
init();
