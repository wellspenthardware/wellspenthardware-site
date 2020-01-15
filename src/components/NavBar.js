import React, { Component } from 'react'

import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
 
import myConstants from "../utils/myConstants";
import myTheme from "../utils/myTheme";
 
const styles = makeStyles(theme => ({}));

export class NavBar extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                
            </div>
        )
    }
}

export default withStyles(styles)(NavBar);
