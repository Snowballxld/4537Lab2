const express = require("express");
const app = express();
const port = 3000;
const DateHandler = require("./modules/utils");
const FileHandler = require("./modules/fileHandling")
const messages = require("./lang/en/en");

//for part B
app.get("/getDate", (req, res) => {
    const name = req.query.name;
    const dateHandler = new DateHandler();
    const currentTime = dateHandler.getDate();

    let message = messages.greeting.replace("%NAME%", name).replace("%TIME%", currentTime);

    res.send(`<p style="color: blue;">${message}</p>`);
});

//for part C

//writing
app.get("/writeFile", (req, res) => {
    const fileHandler = new FileHandler();
    fileHandler.appendToFile(req.query.text, (message) => res.send(message));
});

//reading
app.get("/readFile/:filename", (req, res) => {
    const fileHandler = new FileHandler();
    fileHandler.readFile((data) => res.send(`<pre>${data}</pre>`));
});

//host
app.listen(port);
