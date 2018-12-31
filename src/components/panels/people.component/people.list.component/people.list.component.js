import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import { loadPeopleAction, selectAndLoadPerson } from '../../../../actions/people.actions/people.actions';


const styles = theme => ({
  root: {
    width: '20%',
    backgroundColor: theme.palette.background.paper,
    float: "left",
    position: "absolute"
  },
});


class PeopleList extends Component {
  componentWillMount() {
    this.props.loadPeople();
  }

  handleSelectClick = email => () => {
    this.props.selectPerson(email);
  }

  render() {
    const { classes } = this.props;
    const { people } = this.props;

    return (
      <List dense className={classes.root}>
        {people.all.map(value => (
          <ListItem key={value._id} button onClick={this.handleSelectClick(value.email)}>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={value.avatar}
              />
            </ListItemAvatar>
            <ListItemText primary={value.username} />
          </ListItem>
        ))}
      </List>
    );
  }
}

PeopleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  people: state.people
});

const mapDispatchToProps = dispatch => ({
  loadPeople: () => {
    dispatch(loadPeopleAction());
  },
  selectPerson: (email) => {
    dispatch(selectAndLoadPerson(email));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PeopleList));