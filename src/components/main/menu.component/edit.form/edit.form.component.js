import React, { Component } from "react";
import { connect } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EditIcon from "@material-ui/icons/Edit";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { editProfileAction } from "../../../../actions/user.actions/editProfile.action";

class FormDialog extends Component {
  state = {
    open: false
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleEdit = () => {
    this.setState({ open: false });
    const body = {
      email: this.state.email,
      username: this.state.username,
      info: this.state.info,
      location: this.state.location,
      favoriteLang: this.state.favoriteLang,
      age: this.state.age
    };

    this.props.editProfile(body);
  };

  render() {
    return (
      <div>
        <ListItem button onClick={this.handleClickOpen}>
          <ListItemIcon >
          <EditIcon />
          </ListItemIcon>
          <ListItemText primary="edit" />
        </ListItem>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit</DialogTitle>
          <DialogContent>

            <DialogContentText>
              Fill in the appropriate fields
            </DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              label="email"
              fullWidth
              onChange={this.handleChange('email')}
            />

            <TextField
              autoFocus
              margin="dense"
              label="username"
              fullWidth
              onChange={this.handleChange('username')}
            />

            <TextField
              autoFocus
              margin="dense"
              label="Your profile info"
              fullWidth
              onChange={this.handleChange('info')}
            />

            <TextField
              autoFocus
              margin="dense"
              label="Location"
              fullWidth
              onChange={this.handleChange('location')}
            />

            <TextField
              autoFocus
              margin="dense"
              label="Favorite programming language"
              fullWidth
              onChange={this.handleChange('favoriteLang')}
            />

            <TextField
              autoFocus
              margin="dense"
              label="Age"
              fullWidth
              onChange={this.handleChange('age')}
            />

          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleEdit} color="primary">
              Edit
            </Button>
          </DialogActions>

        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    authenticate: state.authenticate
  });
  
  const mapDispatchToProps = dispatch => ({
    editProfile: (body) => {
      dispatch(editProfileAction(body));
    }
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FormDialog);
  
