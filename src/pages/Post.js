import React, { Component } from "react";

import NavBar from "../components/NavBar";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

export class Post extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
            
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default Post;
