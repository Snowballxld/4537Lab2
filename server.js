const express = require("express");
const app = express();
const port = 3000;
const utils = require("./modules/utils");
const messages = require("./lang/en/en");

app.get("/getDate", (req, res) => {
    const name = req.query.name;
    const currentTime = utils.getDate();

    let message = messages.greeting.replace("%NAME%", name).replace("%TIME%", currentTime);

    res.send(`<p style="color: blue;">${message}</p>`);
});

app.listen(port);