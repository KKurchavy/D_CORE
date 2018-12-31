import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


const styles = theme => ({
  container: {
    flexWrap: "wrap",
    float: "left",
    width: "calc(100% - 110px)",
    marginLeft: "1%"
  },
  subscribeButton: {
    height: "100%",
    width: 100,
    float: "right"
  },
  info: {
      border: "1px solid darkgrey",
      borderRadius: 5,
      margin: "auto",
      width: "90%",
      height: 65,
      overflow: "hidden"
  }
});

class InfoControl extends Component {
  render() {
    const { classes } = this.props;
    const { name: groupName, info } = this.props.selectedGroup;

    return (
      <div>
        <Typography align="center" gutterBottom variant="h4" component="h2">
          {groupName}
        </Typography>
        <div className={classes.info}>
            <Typography align="center" gutterBottom variant="h6" component="h2">
              {info}
            </Typography>
        </div>
      </div>
    );
  }
}

InfoControl.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  selectedGroup: state.groups.selectedGroup,
});


export default connect(
  mapStateToProps
)(withStyles(styles)(InfoControl));
