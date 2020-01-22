const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://wellspenthardwaremod:gibon923@site-pxe1e.mongodb.net/main?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .catch(e => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
