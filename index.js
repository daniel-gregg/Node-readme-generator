//Import required NPM packages
const inquirer = require('inquirer')

//Import local js modules
const questions = require("./utils/questions.js")
const generateMarkdown = require("./utils/generateMarkdown.js")
const writeToFile = require("./utils/writeToFile.js")

//Initialise app function - this runs the prompts in the console once the program is called with 'node index.js'
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        let readme = generateMarkdown(answers)
        writeToFile('./new-readme.md',readme)
    })
}

// Function call to initialize app
init();
