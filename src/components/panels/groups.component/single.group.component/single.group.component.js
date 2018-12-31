import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import PostsList from "../../posts.component/posts.list.component";
import PostsControl from "./posts.control.component";
import GroupInfo from "./group.info.component";
import SubscribeControl from "./subscribe.control.component";
import DeleteButton from "./delete.group.component";


const styles = theme => ({
  root: {
    float: "right",
    width: "85%",
    minHeight: 600,
    borderLeft: "2px solid #3f51b5"
  }
});

class Group extends React.Component {
  render() {
    const { classes } = this.props;
    const posts = this.props.selectedGroupPosts;

    if(Object.keys(this.props.selectedGroup).length === 0) {
      return <div />
    }

    return (
      <div className={classes.root}>
        <GroupInfo />
        <PostsControl />
        <PostsList posts={posts} />
        <SubscribeControl />
        <DeleteButton />
      </div>
    );
  }
}

Group.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  selectedGroup: state.groups.selectedGroup,
  selectedGroupPosts: state.groups.selectedGroupPosts
});


export default connect(
  mapStateToProps
)(withStyles(styles)(Group));
