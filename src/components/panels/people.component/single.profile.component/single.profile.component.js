import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import PersonProfile from "./profile.info.component";

const styles = theme => ({
  root: {
    float: "right",
    width: "calc(100% - 260px)",
    minHeight: 600,
    borderLeft: "2px solid #3f51b5"
  }
});

class Group extends React.Component {
  render() {
    const { classes, selectedPerson } = this.props;

    return !Object.keys(selectedPerson).length ? (
      <p>not selected profile</p>
    ) : (
      <div className={classes.root}>
        <PersonProfile />
      </div>
    );
  }
}

Group.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  selectedPerson: state.people.selectedPerson
});

export default connect(mapStateToProps)(withStyles(styles)(Group));
