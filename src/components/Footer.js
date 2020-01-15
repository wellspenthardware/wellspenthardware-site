import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

import myConstants from "../utils/myConstants";
import myTheme from "../utils/myTheme";

const theme = createMuiTheme({});

const styles = theme => ({
  footer: {
    backgroundColor: myTheme.colors.orange.dark,

    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "60px" /* Height of the footer */
  },
  aligner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

export class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.aligner}>
        <Typography
          className={classes.footer}
          variant="body2"
          color="textSecondary"
          align="center"
        >
          {"Copyright © "}
          <Link color="inherit" href={myConstants.siteAdress}>
            {myConstants.siteName}
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
