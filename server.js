const express = require("express");
const app = express();
const port = 3000;
const utils = require("./modules/utils");
const messages = require("./lang/en/en");

//for part B
app.get("/getDate", (req, res) => {
    const name = req.query.name;
    const currentTime = utils.getDate();

    let message = messages.greeting.replace("%NAME%", name).replace("%TIME%", currentTime);

    res.send(`<p style="color: blue;">${message}</p>`);
});

//for part C

//writing
app.get("/writeFile", (req, res) => {
    utils.appendToFile(req.query.text, (message) => res.send(message));
});

//reading
app.get("/readFile/:filename", (req, res) => {
    utils.readFile((data) => res.send(`<pre>${data}</pre>`));
});

//host
app.listen(port);
