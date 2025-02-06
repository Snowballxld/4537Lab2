//Part C
const fs = require("fs");
const path = require("path");

class FileHandler {
    constructor(filePath) {
        this.filePath = path.join(__dirname, "." + filePath);
    }

    //Appending
    appendToFile(text, callback) {
        fs.appendFile(this.filePath, text + "\n", () => callback("Text appended successfully!"));
    }

    //Reading
    readFile(callback) {
        fs.readFile(this.filePath, "utf8", (err, data) => {
            if (err) {
                return callback(`Error 404: File not found`);
            }
            callback(data);
        });
    }
}

module.exports = FileHandler;
