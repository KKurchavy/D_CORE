import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import { deleteGroupAction } from "../../../../actions/group.actions/deleteGroup.action";

const styles = theme => ({
  deleteButton: {
    position: "absolute",
    bottom: 55,
    right: 45,
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "#e90d0dbf"
  }
});

class DeleteButton extends Component {
  handleDeleteClick  = () => {
    const { selectedGroup } = this.props;

    this.props.deleteGroup(selectedGroup._id);
  };

  render() {
    const { classes, selectedGroup, user } = this.props;
    
    return selectedGroup.author === user.username ? (
      <IconButton
        className={classes.deleteButton}
        onClick={this.handleDeleteClick}
      >
        <DeleteIcon />
      </IconButton>
    ) : (
      <div />
    );
  }
}

DeleteButton.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  selectedGroup: state.groups.selectedGroup,
  user: state.authenticate.user
});

const mapDispatchToProps = dispatch => ({
  deleteGroup: id => {
    dispatch(deleteGroupAction(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(DeleteButton));
