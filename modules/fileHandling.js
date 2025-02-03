//Part C
const fs = require("fs");
const path = require("path");

class FileHandler {
    constructor() {
        this.filePath = path.join(__dirname, "../file.txt");
    }

    //Appending
    appendToFile(text, callback) {
        fs.appendFile(this.filePath, text + "\n", () => callback("Text appended successfully!"));
    }

    //Reading
    readFile(callback) {
        fs.readFile(this.filePath, "utf8", (_, data) => callback(data));
    }
}

module.exports = FileHandler;
