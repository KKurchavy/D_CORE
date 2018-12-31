import React from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitIcon from "@material-ui/icons/ExitToApp";

import EditButtonWithForm from "./edit.form/edit.form.component";
import DeleteButtonWithDialog from "./deleteProfile/deleteButton.component";

import { logoutAction } from "../../../actions/user.actions/authenticate.actions";

class Menu extends React.Component {
  quitHandler() {
    this.props.logout();
  }

  render() {
    return (
      <List>
        <EditButtonWithForm />

        <ListItem button onClick={this.quitHandler.bind(this)}>
          <ListItemIcon>
            <ExitIcon />
          </ListItemIcon>
          <ListItemText primary="exit" />
        </ListItem>

        <DeleteButtonWithDialog />
      </List>
    );
  }
}

const mapStateToProps = state => ({
  authenticate: state.authenticate
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logoutAction());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
