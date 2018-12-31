import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  card: {
    width: 300,
    marginTop: 5
  },
  media: {
    height: 180
  }
};

class Profile extends React.Component {
  state = {
    value: 0
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const { user } = this.props.authenticate;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={user.avatar}
            title="Contemplative Reptile"
          />
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {user.username}
            </Typography>
            <Typography component="p">{user.info}</Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <IconButton
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <List>

              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Age"
                  secondary={<React.Fragment>{user.age}</React.Fragment>}
                />
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Favorite programming language"
                  secondary={
                    <React.Fragment>{user.favoriteLang}</React.Fragment>
                  }
                />
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Location"
                  secondary={<React.Fragment>{user.location}</React.Fragment>}
                />
              </ListItem>

            </List>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authenticate: state.authenticate
});

export default connect(mapStateToProps)(withStyles(styles)(Profile));
