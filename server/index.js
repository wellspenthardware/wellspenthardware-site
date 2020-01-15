const express = require("express");
const cors = require("cors");
const passport = require("passport");
const GoogleStrategy = require("passport-google");
const keys = require("../config");
const chalk = require("chalk");

let user = {};

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE.clientID,
      clientSecret: keys.GOOGLE.clientSecret,
      callbackUrl: "/auth/google/callback"
    },
    (accesToken, refreshToken, profile, cb) => {
      console.log(chalk.red(JSON.stringify(profile)));
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

const app = express();
app.use(cors());
app.use(passport.initialize());

app.get("/auth/google", passport.authenticate("google"));
app.get(
  "/auth/google/callback",
  passport.authenticate("google", (req, res) => {
    res.redirect("/profile");
  })
);
