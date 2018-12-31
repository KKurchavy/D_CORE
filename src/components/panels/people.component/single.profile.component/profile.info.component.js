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
    overflow: "auto",
    width: "100%",
    height: 580,
    margin: "auto"
  },
  media: {
    width: 300,
    height: 300,
    borderRadius: 150,
    margin: "auto"
  }
};

class PersonProfile extends React.Component {
  state = {
    value: 0
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const { avatar, username, age, favoriteLang, location, info } = this.props.selectedPerson;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={avatar}
            title="Contemplative Reptile"
          />
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {username}
            </Typography>
            <Typography component="p">{info}</Typography>
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
                  secondary={<React.Fragment>{age}</React.Fragment>}
                />
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Favorite programming language"
                  secondary={
                    <React.Fragment>{favoriteLang}</React.Fragment>
                  }
                />
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Location"
                  secondary={<React.Fragment>{location}</React.Fragment>}
                />
              </ListItem>

            </List>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

PersonProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  selectedPerson: state.people.selectedPerson
});

export default connect(mapStateToProps)(withStyles(styles)(PersonProfile));
