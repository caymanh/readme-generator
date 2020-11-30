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
    choices: [
      "Academic Free License v3.0",
      "Apache license 2.0",
      "Artistic license 2.0",
      "Boost Software License 1.0",
      'BSD 2-clause "Simplified" license',
      'BSD 3-clause "New" or "Revised" license',
      "BSD 3-clause Clear license",
      "Creative Commons license family",
      "Creative Commons Zero v1.0 Universal",
      "Creative Commons Attribution 4.0",
      "Creative Commons Attribution Share Alike 4.0",
      "Do What The F*ck You Want To Public License",
      "Educational Community License v2.0",
      "Eclipse Public License 1.0",
      "Eclipse Public License 2.0",
      "European Union Public License 1.1",
      "GNU Affero General Public License v3.0",
      "GNU General Public License family",
      "GNU General Public License v2.0",
      "GNU General Public License v3.0",
      "GNU Lesser General Public License family",
      "GNU Lesser General Public License v2.1",
      "GNU Lesser General Public License v3.0",
      "ISC",
      "LaTeX Project Public License v1.3c",
      "Microsoft Public License",
      "MIT",
      "Mozilla Public License 2.0",
      "Open Software License 3.0",
      "PostgreSQL License",
      "SIL Open Font License 1.1",
      "University of Illinois/NCSA Open Source License",
      "The Unlicense",
      "zLib License,",
    ],
  },
];

// function to write README file
// const writeToFile = (fileName, data) => {
//   fs.writeFile(fileName, JSON.stringify(data, null, "\t"), (err) =>
//     err ? console.log(err) : console.log("Success!")
//   );
// };

//function to create markdown
const createMarkDown = (data) => {
  return `
    
    # ${data.title}

    ## Table of Content
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Licence](#licence)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ### Description
    
    ${data.description}
    
    ### Installation

    ${data.installation}

    ### Usage

    ${data.usage}

    ### Licence

    ${data.licence}

    ### Contributing

    ${data.contributing}

    ### Tests

    ${data.tests}

    ### Questions

    Github: https://github.com/${data.username}
    Email: ${data.email}
    `;
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

// function to initialize program
// const init = () => {
//   inquirer.prompt(questions).then((data) => {
//     const fileName = `${data.title.toLowerCase().split(" ").join("")}.md`;
//     writeToFile(fileName, data);
//   });
// };

// function call to initialize program
init();
