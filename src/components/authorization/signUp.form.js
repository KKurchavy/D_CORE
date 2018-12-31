import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import { signUpAction } from "../../actions/user.actions/authenticate.actions";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class SignUp extends Component {
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  signUpHandler = () => {
    const { username, password, repeatPassword, email } = this.state;
    if (password && password === repeatPassword) {
      const body = {
        username,
        password,
        email
      };

      this.props.signUp(body);
    } else {
      alert("Passwords do not match");
    }
  };

  params = {};

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                name="email"
                autoComplete="email"
                autoFocus
                onChange={this.handleChange("email")}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel>User name</InputLabel>
              <Input
                id="custom-css-standard-input"
                onChange={this.handleChange("username")}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleChange("password")}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Repeat password</InputLabel>
              <Input
                name="repeatPassword"
                type="password"
                id="repeat-password"
                autoComplete="current-password"
                onChange={this.handleChange("repeatPassword")}
              />
            </FormControl>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.signUpHandler}
            >
              Sign up
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authenticate: state.authenticate
});

const mapDispatchToProps = dispatch => ({
  signUp: body => dispatch(signUpAction(body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignUp));
