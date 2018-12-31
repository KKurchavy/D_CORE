import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { createGroupAction } from "../../../../actions/group.actions/createGroup.action";
import { loadGroupsAction } from "../../../../actions/group.actions/groups.actions";

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

  handleCreate = () => {
    this.setState({ open: false });
    const body = {
      name: this.state.name,
      info: this.state.info,
      author: this.props.user.username
    };

    this.props.createGroup(body);
    this.props.loadGroups();
  };

  render() {

    return (
      <div>
        <Fab color="secondary" aria-label="Add" onClick={this.handleClickOpen}>
          <AddIcon />
        </Fab>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit</DialogTitle>
          <DialogContent>
            <DialogContentText>
              заполните необходимые поля, для создания группы
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="group name"
              fullWidth
              onChange={this.handleChange("name")}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Group info"
              fullWidth
              onChange={this.handleChange("info")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleCreate} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.groups,
  user: state.authenticate.user
});

const mapDispatchToProps = dispatch => ({
  createGroup: body => {
    dispatch(createGroupAction(body));
  },
  loadGroups: body => {
    dispatch(loadGroupsAction(body));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormDialog);
