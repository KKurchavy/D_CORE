import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { sendPostAction } from "../../../../actions/posts.actions/posts.actions";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    float: "left",
    width: "calc(100% - 110px)",
    marginLeft: "1%"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    height: 100,
    width: "100%"
  },
  sendButton: {
    height: 100,
    width: 100,
    marginTop: 16,
    marginBottom: 8,
    float: "left"
  }
});

class PostsControl extends React.Component {
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSendPost = () => {
    const { selectedGroup, user } = this.props;
    const post = {
      text: this.state.post,
      author: user.username,
      avatar: user.avatar,
      groupId: selectedGroup._id
    };

    this.props.sendPost(post);
  };

  

  render() {
    const { classes } = this.props;

    if(!this.props.selectedGroup.isSubscribed) {
      return <div />
    }

    return (
        <div>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="outlined-multiline-static"
              multiline
              rows="4"
              defaultValue="What's new"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              onChange={this.handleChange("post")}
            />
          </form>

          <Button
            variant="contained"
            color="primary"
            className={classes.sendButton}
            onClick={this.handleSendPost}
          >
            Send
          </Button>
        </div>
    );
  }
}

PostsControl.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  selectedGroup: state.groups.selectedGroup,
  user: state.authenticate.user
});

const mapDispatchToProps = dispatch => ({
  sendPost: (body) => {
    dispatch(sendPostAction(body));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PostsControl));
