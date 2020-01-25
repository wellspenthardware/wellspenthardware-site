const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db/connect");

const app = express();
const apiPort = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

require("./routes/api/account/signup")(app);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Server is working!");
});

app.get(`*`, function(req, res) {
  res.send("Invalid route!");
});

module.exports = app.listen(apiPort, () =>
  console.log(`Server running on port ${apiPort}`)
);
