import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { subscribeAction } from "../../../../actions/group.actions/subscribe.action";
import { unsubscribeAction } from "../../../../actions/group.actions/unsubscribe.action";

const styles = theme => ({
  subscribeButton: {
    position: "absolute",
    bottom: 55,
    right: 110,
    height: 60,
    width: 110,
    borderRadius: 30,
    backgroundColor: "#76FF03"
  },
  unsubscribeButton: {
    position: "absolute",
    bottom: 55,
    right: 110,
    height: 60,
    width: 110,
    borderRadius: 30,
    backgroundColor: "#FFA000"
  }
});

class InfoControl extends Component {
  handleSubscribe = () => {
    const { selectedGroup } = this.props;

    this.props.subscribe(selectedGroup._id);
  };

  handleUnsubscribe = () => {
    const { selectedGroup } = this.props;

    this.props.unsubscribe(selectedGroup._id);
  };

  render() {
    const { classes } = this.props;

    return !this.props.selectedGroup.isSubscribed ? (
      <Button
        variant="contained"
        className={classes.subscribeButton}
        onClick={this.handleSubscribe}
      >
        Subscribe
      </Button>
    ) : (
      <Button
        variant="contained"
        color="primary"
        className={classes.unsubscribeButton}
        onClick={this.handleUnsubscribe}
      >
        Unsubscribe
      </Button>
    );
  }
}

InfoControl.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  selectedGroup: state.groups.selectedGroup
});

const mapDispatchToProps = dispatch => ({
  subscribe: id => {
    dispatch(subscribeAction(id));
  },
  unsubscribe: id => {
    dispatch(unsubscribeAction(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(InfoControl));
