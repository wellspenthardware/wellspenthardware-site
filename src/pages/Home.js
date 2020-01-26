import React, { Component } from "react";
import "../styles/styles.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

import myConstants from "../utils/myConstants";
import myTheme from "../utils/myTheme";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import PostCard from "../components/PostCard";

import * as contentful from "contentful";

const theme = createMuiTheme({});

const styles = theme => ({
  gridContainer: {}
});

export class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    let loading = true;
    let posts = [];
    var client = contentful.createClient({
      space: "70tohv1nl7sr",
      accessToken: "_E2hUs9Qp-MbLt_6TSB_-lBMs8L_XuPsStVvaK4xng0"
    });

    client.getEntries().then(entries => {
      entries.items.forEach(post => {
        posts.push(post);
      });
      //   console.log(posts);
      loading = false;
      this.setState({ posts: posts });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <NavBar />
        <Container maxWidth="lg">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.gridContainer}
          >
            {this.state.posts.map((fields, i) => (
              <PostCard
                post={fields.fields}
                path={fields.fields.path}
                title={fields.fields.title}
                description={fields.fields.description}
                image={fields.fields.thumbnail.fields.file.url}
                key={i}
              />
            ))}
          </Grid>
        </Container>
        <Footer />
      </>
    );
  }
}
export default withStyles(styles)(Home);
