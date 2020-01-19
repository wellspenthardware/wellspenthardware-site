import React, { Component } from "react";

import "../styles/Login.css";

import { Container, TextField, Grid, Button } from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

import classNames from "classnames";
import myConstants from "../utils/myConstants";
import myTheme from "../utils/myTheme";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: myTheme.colors.blue.main
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: myTheme.colors.blue.main,
        borderWidth: "1.5px"
      },
      "&:hover fieldset": {
        borderColor: myTheme.colors.blue.light
      },
      "&.Mui-focused fieldset": {
        borderColor: myTheme.colors.blue.dark
      }
    }
  }
})(TextField);

const theme = createMuiTheme({});

const styles = theme => ({
  container: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    border: "3px",
    borderRadius: "25px",
    borderStyle: "solid",
    borderColor: myTheme.text.primary,
    padding: "0"
  },
  lockIcon: {
    color: myTheme.colors.blue.main,
    display: "block",
    margin: "0 auto",
    marginTop: "16px",
    marginBottom: "16px",
    height: "40px",
    width: "40px"
  },
  titleText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: myTheme.colors.blue.main,
    marginLeft: "16px",
    marginRight: "16px",
    marginBottom: "0px",
    marginTop: "0px",
    borderWidth: "1px 0px 1px 0px",
    borderStyle: "solid",
    borderColor: myTheme.colors.blue.main,
    padding: "16px 0px"
  },
  textFieldGeneral: {
    display: "block",
    marginTop: "16px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "red"
  },
  grid: {
    paddingLeft: "16px",
    paddingRight: "16px",
    marginTop: "16px"
  },
  gridLeft: {
    paddingRight: "8px"
  },
  gridBottom: {
    paddingBottom: "16px"
  },
  textField: {
    borderColor: myTheme.colors.blue.main
  },
  button:{
      display:"block",
      marginBottom:"16px",
      marginLeft:"auto",
      marginRight:"auto",
  }
});

export class SignUp extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.page}>
        <Container className={classes.container} maxWidth="xs">
          <LockOutlinedIcon className={classes.lockIcon} />
          <p className={classes.titleText} align="center">
            Log In
          </p>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid className={classes.grid} container>
              <Grid className={classes.gridBottom} item xs={12}>
                <CssTextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid className={classes.gridBottom} item xs={12}>
                <CssTextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid center item xs={12}>
                <Button className={classes.button} variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(SignUp);
