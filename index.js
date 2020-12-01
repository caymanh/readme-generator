const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter your project description",
  },
  {
    type: "input",
    name: "installation",
    message: "Input the installation instructions for your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Input the usage information for your project.",
  },
  {
    type: "input",
    name: "contributing",
    message: "Input the contribution guidelines for your project.",
  },
  {
    type: "input",
    name: "tests",
    message: "Input the test instructions for your project.",
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "list",
    message: "Select a licence for your project",
    name: "licence",
    choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
  },
];

//function to create markdown
const createMarkDown = (data) => {
  return `# ${data.title}\n
  ![badge](https://img.shields.io/badge/license-${data.licence}-brightgreen)\n 
  ## Table of Content\n
  - [Description](#description)\n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [Licence](#licence)\n
  - [Contributing](#contributing)\n
  - [Tests](#tests)\n
  - [Questions](#questions)\n
      
  ### Description\n
      
  ${data.description}\n
      
  ### Installation\n

  ${data.installation}\n

  ### Usage\n

  ${data.usage}\n

  ### Licence\n

  This application is covered by the ${data.licence} licence.\n

  ### Contributing\n

  ${data.contributing}\n

  ### Tests\n

  ${data.tests}\n

  ### Questions\n

  Github: https://github.com/${data.username}\n
  
  Email: ${data.email}`;
};

// function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
};

// function to initialize program
const init = () => {
  inquirer.prompt(questions).then((data) => {
    const fileName = `README.md`;
    writeToFile(fileName, createMarkDown(data));
  });
};

// function call to initialize program
init();
