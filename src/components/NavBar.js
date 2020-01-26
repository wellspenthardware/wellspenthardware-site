import React, { Component } from "react";

import { createMuiTheme } from "@material-ui/core/styles";
import { fade, withStyles } from "@material-ui/core/styles";

import myConstants from "../utils/myConstants";
import myTheme from "../utils/myTheme";

import {
  AppBar,
  Toolbar,
  InputBase,
  Button,
  ButtonGroup
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import Logo from "../images/logo.png";

const theme = createMuiTheme({});

const styles = theme => ({
  navBar: {
    backgroundColor: myTheme.colors.orange.main
  },
  title: {
    color: myTheme.text.primary,
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.only("xs")]: {
      fontSize: "10px"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px"
    }
  },
  logo: {
    width: "3.5rem",
    maxWidth: "150px",
    padding: "5px"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  button: {
    color: myTheme.colors.blue.dark
  },
  buttonGroup:{
      paddingRight:"15px"
  }
});
export class NavBar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar className={classes.navBar} position="sticky">
        <Toolbar>
          <img className={classes.logo} src={`https://scontent.fias1-1.fna.fbcdn.net/v/t1.15752-9/84696294_1030783747296500_7022495249511481344_n.png?_nc_cat=110&_nc_ohc=2R840jNkENMAX-CQKKD&_nc_ht=scontent.fias1-1.fna&oh=4c64a42c99c10c859d65787941e1bf8f&oe=5E9554E1`} />

          <p className={classes.title}>Well Spent Hardware</p>

          <ButtonGroup
          className={classes.buttonGroup}
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button className={classes.button} href="/login">Log In</Button>
            <Button className={classes.button} href="/signup">Sign Up</Button>
          </ButtonGroup>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{ color: myTheme.icon.secondary }} />
            </div>
            <InputBase
              style={{ color: myTheme.colors.blue.dark }}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavBar);
