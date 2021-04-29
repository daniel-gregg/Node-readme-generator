const fs = require('fs')

//This function uses the fs module to write the created readme to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data , (err) =>
            err ? console.log(err) : console.log("Successfully created a new readme called 'new-readme.md'")
            );
}

module.exports = writeToFile

