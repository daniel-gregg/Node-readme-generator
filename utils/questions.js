//import modules
const licenses = require("./licenses");
const names = licenses.map(license => license.name)

//An array of questions for user input providing input to the readme file
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your application?',
    },
    {
      type: 'input',
      name: 'author',
      message: 'Please enter your github username',
    },
    {
      type: 'input',
      name: 'description',
      message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide
      - What was your motivation?
      - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
      - What problem does it solve?
      - What did you learn?`,
    },
    {
      type: 'input',
      name: 'installation',
      message: `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.`,
      default: 'Let us hope it is obvious, the author has left this blank!'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
      default: 'I guess you will have to work it out, the authors has left this blank!'
    },
    {
      type: 'input',
      name: 'screenshot',
      message: `Please input path for screenshot if desired: e.g. "./assets/screenshot.jpg".`,
    },
    {
      type: 'list',
      name: 'license',
      message: `Please choose your license`,
      choices: names,
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Please provide any other contributors names. If none, leave blank.',
      default: 'No other authors'
    },
    {
      type: 'input',
      name: 'features',
      message: 'Please provide a description of the features of your application',
      default: 'Blank'
    },
    {
      type: 'input',
      name: 'contact',
      message: 'Please enter an email address for readers to contact you',
      default: ''
    }
  ];

module.exports = questions;
