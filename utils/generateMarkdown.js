// Imports licenses module - needed to get details of the popular licenses used on github projects
const licenses = require("./licenses");

//Renders markdown for the readme file from the answers to inquirer-driven queries
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
  ![license URL]${licenses[licenses.findIndex(x => x.key === "gpl-3.0")].url}

  ## Features
  ${data.features}

  ## Contact
  ${data.email}
`
}

module.exports = generateMarkdown;

