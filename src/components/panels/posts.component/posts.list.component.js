import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const styles = theme => ({
  root: {
    width: "100%",
    height: 390,
    backgroundColor: theme.palette.background.paper,
    float: "left",
    padding: 20,
    overflow: "auto"
  },
  inline: {
    display: "inline"
  }
});

class PostsList extends Component {
  listItems(arr) {
    if (arr) {
      return arr.map(elem => {
        return (
          <ListItem alignItems="flex-start" key={elem._id}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={elem.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={elem.author}
              secondary={<React.Fragment>{elem.text}</React.Fragment>}
            />
          </ListItem>
        );
      });
    } else return "list posts is empty";
  }

  render() {
    const { classes } = this.props;
    const { posts } = this.props;

    return <List className={classes.root}>{this.listItems(posts)}</List>;
  }
}

PostsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostsList);
