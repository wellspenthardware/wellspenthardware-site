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
    maxWidth: 1000
  },
  gridItem: {
    marginTop: "16px"
  },
  title:{
      marginBottom:"0px"
  },
  accessButton:{
    marginLeft:"auto",
    marginRight:"auto"
  }
});

export class PostCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.gridItem} item xs={12}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography className={classes.title} align="center" gutterBottom variant="h5" component="h2">
                {this.props.title}
              </Typography>
            </CardContent>

            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="350"
              image={this.props.image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions disableSpacing>
            <Button className={classes.accessButton} size="small" color="primary">
              Acces Post
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(PostCard);
