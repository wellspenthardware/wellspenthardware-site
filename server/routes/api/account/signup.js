const User = require("../../../models/User");

module.exports = app => {
  app.post("/api/account/signup", (req, res, next) => {
    let { body } = req;
    let { nickname, firstName, lastName, email, password } = body;

// validate 
    
    if (!nickname) {
      return res.send({
        succes: false,
        message: "Error: Nickname cannot be blank."
      });
    }

    if (nickname.contains(" ")) {
      return res.send({
        succes: false,
        message: "Error: Nickname cannot contain whitespace."
      });
    }

    if (!firstName) {
      return res.send({
        succes: false,
        message: "Error: First name cannot be blank."
      });
    }

    if (!lastName) {
      return res.send({
        succes: false,
        message: "Error: Last name cannot be blank."
      });
    }

    if (!email) {
      return res.send({
        succes: false,
        message: "Error: Email cannot be blank."
      });
    }
    if (!password) {
      return res.send({
        succes: false,
        message: "Error: Password cannot be blank."
      });
    }

    nickname = nickname.trim();

    firstName = firstName.trim();

    lastName = lastName.trim();

    email = email.toLowerCase();
    email = email.trim();

    // password = password.trim();
 

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
