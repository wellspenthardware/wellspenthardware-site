import React, { Component } from 'react'
import "../styles/styles.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
 
import myConstants from "../utils/myConstants";
import myTheme from "../utils/myTheme";
 
const theme = createMuiTheme({});
 
const styles = theme => ({});

export class Home extends Component {
    render() {
        return (
            <>
            <NavBar/>
            <Footer/>
            </>
        )
    }
}

export default Home
