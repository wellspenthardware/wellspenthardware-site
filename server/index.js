const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db/connect");

const app = express();

const constants = require("./constants");

const apiPort = constants.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

require("./routes/api/account/signup")(app);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

// check if server is running
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// require code for any routes that don't exist
require("./routes/any")(app);

module.exports = app.listen(apiPort, () =>
  console.log(`Server running on port ${apiPort}`)
);
