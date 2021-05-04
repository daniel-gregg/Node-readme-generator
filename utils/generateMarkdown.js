const licenses = require("./licenses");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//test:


/* 
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {} */

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Badges:
  ![license badge](${licenses[licenses.findIndex(x => x.key === "gpl-3.0")].badge})

  ## Author
  github.com/${data.author}
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  ![screenshot](${data.screenshot})

  ## Credits
  ${data.credits}
  
  ## License
  ${licenses[licenses.findIndex(x => x.key === "gpl-3.0")].name}
  ${licenses[licenses.findIndex(x => x.key === "gpl-3.0")].badge}

  ## Features
  ${data.features}

  ## Contact
  ${data.email}
`
}

module.exports = generateMarkdown;

