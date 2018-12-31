import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import { Redirect } from "react-browser-router";

import Profile from "./profile/Profile.component";
import Menu from "./menu.component/menu.component";
import Panels from "../panels/Panels.component";

const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    paddingLeft: 2
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  }
});

class Main extends Component {

  render() {
    const { classes } = this.props;

    return !this.props.authenticate.isAuthenticated ? (
      <Redirect to="/" />
    ) : (
      <div className={classes.root}>
        <CssBaseline />

        <AppBar position="fixed" className={classes.appBar}>
          <Panels />
        </AppBar>

        <nav className={classes.drawer}>
          <Profile />
          <Menu />
        </nav>
      </div>
    );
  }
  
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authenticate: state.authenticate
});

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(Main)
);
