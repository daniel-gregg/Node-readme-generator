# Node-readme-generator
A Node.js console-based readme generator using the inquirer module to implement prompt-based requests to fill out readme sections

## Author
github.com/spaniel-boone

## Description
The Node-readme-generator was devloped as a first entry point in learning Node. 
The program provides an interactive tool for the user to generate a readme file based on prompts and user inputs. Whilst it is console-based, the program presents a procedure to easily implement interactivity between a user and a server-based process. 

Key learnings from this project were:
    - Installation, usage, and use-cases of Node and npm

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation
- You must have Node installed on your computer. See here https://nodejs.org/en/download/. 
- Check that you have the latest version of npm installed. In node type this into the console: 'npm install npm@latest -g'
- Run the program!
    * Navigate to our root directory
    * Type 'node index.js' into the console
    * Answer the prompts!



## Usage
See the link below for a video presenting usage of the Node-readme-generator program
https://drive.google.com/file/d/1f7kFTWFUpwF_TzxeY7QdNKQQssTvJBOn/view

## Features
Users can generate a properly formatted readme.md file with the following sections:
- Title
- Author
- Badges (dynamically-filled from the license section)
- Description
- Installation
- Usage
- screenshot
- License
- Credits
- Features
- Contact section

The program creates a .md file called 'new-readme.md' in the root folder of the application.