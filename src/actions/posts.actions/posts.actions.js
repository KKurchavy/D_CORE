import { createPost, loadPosts } from "../../connection/posts.request";

export const LOAD_POSTS_SUCCESS = "";
export const LOAD_POSTS_FAILED = "SEND_POST_FAILED";

export const sendPostAction = body => dispatch => {
  createPost(body).then(() => {
    loadPostsAction(body.groupId)(dispatch);
  });
};

export const loadPostsAction = id => dispatch => {
  loadPosts(id)
      .then(posts => {
        dispatch({
          type: LOAD_POSTS_SUCCESS,
          payload: posts
        });
      })
      .catch(err => {
        dispatch({
          type: LOAD_POSTS_SUCCESS,
          payload: []
        });
      });
};
