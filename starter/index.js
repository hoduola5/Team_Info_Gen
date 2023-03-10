const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateTeam = require("./src/page-template");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

//Function to validate the input name
const validateInputName = (name) => {
  const letters = /^[a-z\s]*$/gi;
  let nameInputed = name.trim().match(letters);
  if (nameInputed) {
    return true;
  }
  return "Invalid name!";
};

//Function to validate the number input
const validateInputNumber = (num) => {
  let numberInputed = num.trim().match(/[0-9]/g);
  if (numberInputed) {
    return true;
  }
  return "Invalid input!";
};

// Function to validate the input Email
const validateInputEmail = (email) => {
  const mailformat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  let emailType = email.match(mailformat);
  if (emailType) {
    return true;
  }
  return "Invalid email address!";
};

//To validate the GitHub username
const validateGithubUserName = (userName) => {
  const acceptableChars = /^[a-zA-Z0-9-]*$/gi;

  // const userName.trim() = userName.trim();

  const validUserName =
    userName.trim().match(acceptableChars) &&
    userName.trim().length > 0 &&
    userName.trim().length <= 39;

  if (validUserName) {
    return true;
  }
  return "Invalid user name!";
};

const capitalize = (str) => {
  let arrayOfwords = str.split(" ");
  let capitalWord = arrayOfwords.map((word) => {
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.substring(1).toLowerCase();
    return firstLetter + restOfWord;
  });
  return capitalWord.join(" ");
};

//Array to store team members profile
const profileTeamArr = [];

// Function to update team members profile
function updateProfileTeamArr(employee) {
  profileTeamArr.push(employee);
}

// Function to initialize the application
function init() {
  getManagerInfo();
}

//
function displayTeamMenu() {
  let teamMenuOptions = [
    "Add an engineer",
    "Add an intern",
    "Finish building the team",
  ];

  inquirer
    .prompt([
      {
        type: "list",
        message: "Enter Menu:\n  Please select one of the following options ",
        name: "menu",
        choices: teamMenuOptions,
      },
    ])
    .then((response) => {
      switch (response.menu) {
        case teamMenuOptions[0]:
          getEngineerInfo();
          break;
        case teamMenuOptions[1]:
          getInternInfo();
          break;
        default:
          writeToHtmlFile(OUTPUT_DIR, outputPath, render(profileTeamArr));
          break;
      }
    });
}

// Function to create new managers
function createNewManager(info) {
  const manager = new Manager(
    capitalize(info.managerName),
    info.managerID,
    info.managerEmailAddress,
    info.managerOfficeNumber
  );
  return manager;
}

// Funtion to create new engineers
function createNewEngineer(info) {
  const engineer = new Engineer(
    capitalize(info.engineerName),
    info.engineerID,
    info.engineerEmailAddress,
    info.engineerGithubUserName
  );

  return engineer;
}

// Function to create new interns
function createNewIntern(info) {
  const intern = new Intern(
    capitalize(info.internName),
    info.internID,
    info.internEmailAddress,
    info.internSchool
  );
  return intern;
}

//To store manager questions in an array
managerQuestions = [
  {
    type: "input",
    message: "Enter Manager's name:",
    name: "managerName",
    validate: validateInputName,
  },
  {
    type: "input",
    message: "Enter Manager's ID:",
    name: "managerID",
    validate: validateInputNumber,
  },
  {
    type: "input",
    message: "Enter Manager's email address:",
    name: "managerEmailAddress",
    validate: validateInputEmail,
  },
  {
    type: "input",
    message: "Enter Manager's office number:",
    name: "managerOfficeNumber",
    validate: validateInputNumber,
  },
];

// To store the engineer questions in an array
engineerQuestions = [
  {
    type: "input",
    message: "Enter Engineer's name:",
    name: "engineerName",
    validate: validateInputName,
  },
  {
    type: "input",
    message: "Enter Engineer's ID:",
    name: "engineerID",
    validate: validateInputNumber,
  },
  {
    type: "input",
    message: "Enter Engineer's email address:",
    name: "engineerEmailAddress",
    validate: validateInputEmail,
  },
  {
    type: "input",
    message: "Enter Engineer's Github username:",
    name: "engineerGithubUserName",
    validate: validateGithubUserName,
  },
];

// To store the Intern questions in an array
internQuestions = [
  {
    type: "input",
    message: "Enter Intern's name:",
    name: "internName",
    validate: validateInputName,
  },
  {
    type: "input",
    message: "Enter Intern's ID:",
    name: "internID",
    validate: validateInputNumber,
  },
  {
    type: "input",
    message: "Enter Intern's email address:",
    name: "internEmailAddress",
    validate: validateInputEmail,
  },
  {
    type: "input",
    message: "Enter Intern's school:",
    name: "internSchool",
  },
];

// Function to get manager's information
function getManagerInfo() {
  inquirer.prompt(managerQuestions).then((info) => {
    const manager = createNewManager(info);
    updateProfileTeamArr(manager);
    displayTeamMenu();
  });
}

// Function to get engineer's information
function getEngineerInfo() {
  inquirer.prompt(engineerQuestions).then((info) => {
    const engineer = createNewEngineer(info);
    updateProfileTeamArr(engineer);
    displayTeamMenu();
  });
}

// Function to get intern's information
function getInternInfo() {
  inquirer.prompt(internQuestions).then((info) => {
    const intern = createNewIntern(info);
    updateProfileTeamArr(intern);
    displayTeamMenu();
  });
}

//Function to write to file
function writeToHtmlFile(dirPath, filePath, data) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdir(dirPath, (error) => {
      if (error) {
        console.info("Sorry, an error occurred. Please try again later.");
      }
    });
  }

  fs.writeFile(filePath, data, (error) => {
    error
      ? console.info("Sorry, an error occurred. Please try again later.")
      : console.info(
          `An HTML page has been successfully generated and located inside "output" folder!`
        );
  });
}

init();
