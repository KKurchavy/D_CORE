import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import PeopleList from './people.list.component/people.list.component';
import SingleProfile from './single.profile.component/single.profile.component';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function Groups() {
  return (
    <div>
        <PeopleList />
        <SingleProfile />
    </div>
  );
}

Groups.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Groups);