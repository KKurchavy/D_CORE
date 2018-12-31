import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Add from "./create.group.component";

import {
  loadGroupsAction,
  selectAndLoadGroup
} from "../../../../actions/group.actions/groups.actions";
import { loadPostsAction } from "../../../../actions/posts.actions/posts.actions";

const styles = theme => ({
  root: {
    width: "15%",
    height: 550,
    backgroundColor: theme.palette.background.paper,
    float: "left",
    overflow: "auto"
  },
  listItem: {
    paddingLeft: 0
  }
});

class InsetList extends React.Component {
  state = {
    mobileOpen: false
  };

  componentWillMount() {
    this.props.loadGroups();
  }

  selectHandler = id => () => {
    this.props.selectGroup(id);
    this.props.loadPosts(id);
  };

  listItems() {
    return this.props.groups.all.map(value => {
      return (
        <ListItem
          button
          key={value._id}
          onClick={this.selectHandler(value._id)}
        >
          <ListItemText primary={value.name} />
        </ListItem>
      );
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <List component="nav" className={classes.root}>
          {this.listItems()}
          <Add />
        </List>
      </div>
    );
  }
}

InsetList.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  groups: state.groups
});

const mapDispatchToProps = dispatch => ({
  loadGroups: () => {
    dispatch(loadGroupsAction());
  },
  selectGroup: body => {
    dispatch(selectAndLoadGroup(body));
  },
  loadPosts: id => {
    dispatch(loadPostsAction(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(InsetList));
