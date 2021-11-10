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
function writeToFile(fileName, data) {
  const { projectName, description, installation, usage, credits, license } =
    data;
  fs.writeFile(
    "README.md",
    `# ${projectName}
    ## Description
    Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
    - What was your motivation?
    - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    - What problem does it solve?
    - What did you learn?
    ## Table of Contents (Optional)
    If your README is long, add a table of contents to make it easy for users to find what they need.
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    ## Installation
    What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
    ## Usage
    Provide instructions and examples for use. Include screenshots as needed.
    To add a screenshot, create an folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
        
    ## Credits
    List your collaborators, if any, with links to their GitHub profiles.
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    If you followed tutorials, include links to those here as well.
    ## License
    The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    ---
    `,
    (err) => (err ? console.error(err) : console.log("README logged!"))
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
