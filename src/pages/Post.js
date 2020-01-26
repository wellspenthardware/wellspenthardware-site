import React, { Component } from "react";

import NavBar from "../components/NavBar";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

import myConstants from "../utils/myConstants";
import myTheme from "../utils/myTheme";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import RichText from "@madebyconnor/rich-text-to-jsx";

const theme = createMuiTheme({});

const styles = theme => ({
  gridContainer: {
    marginTop: "16px"
  },
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  subtitle: {
    marginTop: "16px",
    marginBottom: "16px"
  }
});

export class Post extends Component {
  render() {
    const { classes } = this.props;
    const { post } = this.props.location.state.post;
    console.log(post);
    return (
      <>
        <NavBar />
        <Container maxWidth="lg">
          <Grid className={classes.gridContainer} container>
            <Grid item xs={12}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography
                    className={classes.subtitle}
                    color="textSecondary"
                  >
                    {post.subtitle}
                  </Typography>
                  {
                    // <Typography variant="body2" component="p">
                    //   well meaning and kindly.
                    //   <br />
                    //   {'"a benevolent smile"'}
                    // </Typography>
                  }
                  <RichText richText={post.richText} />
                </CardContent>
                {
                  // <CardActions>
                  //   <Button size="small">Learn More</Button>
                  // </CardActions>
                }
              </Card>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(Post);
