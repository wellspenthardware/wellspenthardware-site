const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://wellspenthardwaremod:gibon923@site-pxe1e.mongodb.net/main?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('DB Connected!'))
.catch(err => {
console.log(`DB Connection Error: ${err.message}`);
});

const db = mongoose.connection;

module.exports = db;
