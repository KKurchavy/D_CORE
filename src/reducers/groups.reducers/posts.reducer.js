import {
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILED
} from "../../actions/posts.actions/posts.actions";

const initialState = {
  all: [],
  selectedGroup: {},
  selectedGroupPosts: []
};

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS_SUCCESS:
      return {
        ...state,
        selectedGroupPosts: [...action.payload]
      };
    case LOAD_POSTS_FAILED:
      return {
        ...state,
        selectedGroupPosts: [...action.payload]
      };

    default:
      return state;
  }
}
