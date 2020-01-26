import React, { Component } from "react";

import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

import myConstants from "../utils/myConstants";
import myTheme from "../utils/myTheme";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({});

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  gridItem: {
    marginTop: "16px"
  }
});

export class PostCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.gridItem} item xs={12}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={this.props.image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.title ? this.props.title : "Title"}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.description
                  ? this.props.description
                  : `Lizards are a widespread group of squamate reptiles,
                   with over 6,000 species, ranging across all continents except Antarctica`}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(PostCard);
