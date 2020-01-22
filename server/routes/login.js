const User = require("../../models/User");

module.exports = app => {
  app.post("/api/account/signup", (req, res, next) => {
    let { body } = req;
    let { nickname, firstName, lastName, email, password } = body;

    if (!nickname) {
      return res.send({
        succes: false,
        message: "Error: Nickname cannot be blank."
      });
    }
    if (!password) {
      return res.send({
        succes: false,
        message: "Error: Password cannot be blank."
      });
    }

    email = email.toLowerCase();
    email = email.trim();


    // verify email doesn't exist

    User.find({ email: email }, (err, previousUsers) => {
      if (err) {
        return res.send({
          succes: false,
          message: "Error: Server error.",
          error: err
        });
      } else if (previousUsers.length > 0) {
        return res.send({
          succes: false,
          message: "Error: Account already exists."
        });
      }

      // save the new user

      let newUser = new User();

      newUser.nickname = nickname;
      newUser.firstName = firstName;
      newUser.lastName = lastName;
      newUser.email = email;
      newUser.password = newUser.generateHash(password);

      newUser.save((err, user) => {
        if (err) {
          return res.send({
            succes: false,
            message: "Error: Server error.",
            error: err
          });
        }
        return res.send({
          succes: true,
          message: "Signed up"
        });
      });
    });
  });
};
