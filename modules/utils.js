const fs = require("fs");
const path = require("path");

//for part B
module.exports.getDate = function () {
    return new Date().toString();
};

//for part C
const filePath = path.join(__dirname, "../file.txt");

//writing
module.exports.appendToFile = function (text, callback) {
    fs.appendFile(filePath, text + "\n", () => callback("Text appended successfully!"));
};

//reading
module.exports.readFile = function (callback) {
    fs.readFile(filePath, "utf8", (_, data) => callback(data));
};
