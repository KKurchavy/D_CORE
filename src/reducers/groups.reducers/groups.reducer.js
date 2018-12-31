import reduceReducers from "reduce-reducers";
import { createGroupReducer } from "./createGroup.reducer";
import { postsReducer } from "./posts.reducer";
import { deleteGroupReducer } from "./deleteGroup.reducer";
import {
  LOAD_GROUPS_SUCCESS,
  LOAD_GROUP_SUCCESS,
  LOAD_GROUPS_ERROR,
  LOAD_GROUP_ERROR
} from "../../actions/group.actions/groups.actions";

const initialState = {
  all: [],
  selectedGroup: {},
  selectedGroupPosts: []
};

function groupsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GROUPS_SUCCESS:
      return {
        ...state,
        all: [...action.payload]
      };
    case LOAD_GROUPS_ERROR:
      return {
        ...state,
        all: [...action.payload]
      };

    case LOAD_GROUP_SUCCESS:
      return {
        ...state,
        selectedGroup: {...action.payload}
      };
    case LOAD_GROUP_ERROR:
      return {
        ...state,
        selectedGroup: {...action.payload}
      };

    default:
      return state;
  }
}

export default reduceReducers(
  groupsReducer,
  createGroupReducer,
  postsReducer,
  deleteGroupReducer,
  initialState
);
